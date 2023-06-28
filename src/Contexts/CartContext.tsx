import { createContext, ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { useNavigate } from 'react-router-dom'

import { SnacksData } from '../Interfaces/SnacksData'
import { CustomerData } from '../Interfaces/CustomerData'

import { processCheckout } from '../services/api'

import { Snack } from '../Interfaces/Snack'

interface CartContextProps {
  cart: Snack[]
  addSnackIntoCart: (snack: SnacksData) => void
  removeSnackFromCart: (snack: Snack ) => void
  snackCartIncrement: (snack: Snack) => void
  snackCartDecrement: (snack: Snack) => void
  confirmOrder: () => void
  payOrder: (customer: CustomerData) => void
}

interface CartProviderProps{
  children: ReactNode
}
export const CartContext = createContext({} as CartContextProps)

const localStorageKey = '@onlineorder: cart'

export function CartProvider({ children }: CartProviderProps){
  const navigate = useNavigate()

  const [cart, setCart] = useState<Snack[]>(() => {

    const value = localStorage.getItem(localStorageKey)

    if(value) return JSON.parse(value)
    return []
  })

  function saveCart(items: Snack[]){
    setCart(items)

    localStorage.setItem(localStorageKey, JSON.stringify(items))
  }

  function clearCart(){
    localStorage.removeItem(localStorageKey)
  }

  function addSnackIntoCart(snack: SnacksData): void{

    const snackExistsinCart = cart.find((item) => item.snack === snack.snack &&
    item.id === snack.id)

    if(snackExistsinCart){
      const newCart = cart.map((item) => {
        if(item.id === snack.id){

          const quantity = item.quantity + 1
          const subTotal = item.price * quantity

          return {...item, quantity, subTotal}
        }
        return item
      })
      toast.success(` New ${snack.snack} ${snack.name} added to My Orders!`)
      saveCart(newCart)

      return
    }

    const newSnack = { ...snack, quantity: 1, subTotal: snack.price}

    const newCart = [...cart, newSnack]


    toast.success(` New ${snack.snack} ${snack.name} added to My Orders!`)

    saveCart(newCart)
  }

  function removeSnackFromCart( snack: Snack){
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))
    saveCart(newCart)
  }

  function updateSnackQuantity(snack: Snack, newQuantity:number){
    if(newQuantity <= 0) return

    const snackExistsinCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    if(!snackExistsinCart) return

    const newCart = cart.map((item) => {
      if(item.id === snackExistsinCart.id && item.snack === snackExistsinCart.snack){
        return{
          ...item,
          quantity: newQuantity,
          subTotal: item.price * newQuantity
        }
      }
      return item
    })

    saveCart(newCart)
  }

  function snackCartIncrement(snack: Snack){
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  function snackCartDecrement(snack: Snack){
    updateSnackQuantity(snack, snack.quantity - 1)

  }

  function confirmOrder(){
   navigate('/payment')
  }

 async function payOrder(customer: CustomerData){
    try{
      const response = await processCheckout(cart, customer)

      if(response.data.status !== 'PAID'){
        toast.error("Unable to process payment.")
        return
      }

      clearCart()

      toast.success('Paid')
      navigate(`/order/success/${response.data.id}`)

    }catch(error){
      console.error('error: ', error)
      toast.error("Unable to complete the order")
    }

  }

  return(

  <CartContext.Provider
  value={{
    cart,
    addSnackIntoCart,
    removeSnackFromCart,
    snackCartDecrement,
    snackCartIncrement,
    confirmOrder,
    payOrder
    }}>
    {children}
  </CartContext.Provider>
  )


}
