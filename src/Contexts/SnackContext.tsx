import { useEffect, useState, createContext, ReactNode } from 'react'


import { SnacksData } from '../Interfaces/SnacksData'
import { getBurgers, getPizzas, getDesserts, getDrinks } from '../services/api'

interface SnackContextProps {
  burgers: SnacksData[]
  pizzas: SnacksData[]
  drinks: SnacksData[]
  desserts: SnacksData[]
}
export const SnackContext = createContext({} as SnackContextProps)

interface SnackProviderProps {
  children: ReactNode
}

export function SnackProvider( { children }: SnackProviderProps){
  const [burgers, setBurgers] = useState<SnacksData[]>([])
  const [pizzas, setPizzas] = useState<SnacksData[]>([])
  const [drinks, setDrinks] = useState<SnacksData[]>([])
  const [desserts, setDesserts] = useState<SnacksData[]>([])

  useEffect(()=>{
    (async () => {

      try{

        const burgerRequest = await getBurgers()
        const pizzaRequest = await getPizzas()
        const drinksRequest = await getDrinks()
        const dessertsRequest = await getDesserts()

        const requests = [burgerRequest, pizzaRequest, drinksRequest, dessertsRequest]
        const [
          {data: burgerResponse},
          {data: pizzaResponse},
          {data: drinksResponse},
          {data: dessertsResponse}
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setPizzas(pizzaResponse)
        setDrinks(drinksResponse)
        setDesserts(dessertsResponse)
      }catch(err){
        console.error(err)
      }

    })()
  },[])

  return(
    <SnackContext.Provider value={{burgers, pizzas, drinks, desserts}}>
          {children}
    </SnackContext.Provider>
  )
}




