import axios from 'axios'

import { SnacksData } from '../Interfaces/SnacksData'
import { Snack } from '../Interfaces/Snack'
import { CustomerData } from '../Interfaces/CustomerData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnacksData[]>('/snacks?snack=burger')
export const getPizzas = () => api.get<SnacksData[]>('/snacks?snack=pizza')
export const getDrinks = () => api.get<SnacksData[]>('/snacks?snack=drink')
export const getDesserts = () => api.get<SnacksData[]>('/snacks?snack=dessert')

export const processCheckout = (cart: Snack[], customer: CustomerData) => api.post('/checkout',  {
  cart,
  customer: {
    fullName: customer.fullName,
    email: customer.email,
    mobile: customer.phone,
    document: customer.document,
    zipCode: customer.zipCode,
    street: customer.street,
    number: customer.number,
    complement: customer.complement,
    neighborhood: customer.neighborhood,
    city: customer.city,
    state: customer.state
  },
  payment: {
    creditCardNumber: customer.creditCard,
    creditCardHolder: customer.creditCardHolder,
    creditCardExpiration: `${new Date(customer.creditCardExpiration).getMonth() + 1}/${new Date(
      customer.creditCardExpiration,
    ).getFullYear()}`,
    creditCardSecurityCode: customer.creditCardSecurityCode
  }
})

export default api
