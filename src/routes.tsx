import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Burgers'
import PizzasPage from './pages/Pizza'
import DrinksPage from './pages/Drinks'
import DessertsPage from './pages/Desserts'
import MyCartPage from './pages/MyCart'
import Payment from './pages/Payment'
import OrderSuccessPage from './pages/Orders/Success'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<BurgersPage />}/>
        <Route path='pizzas' element={<PizzasPage />}/>
        <Route path='drinks' element={< DrinksPage />}/>
        <Route path='desserts' element={< DessertsPage />}/>
      </Route>
      <Route path='cart' element={<MyCartPage />} ></Route>
      <Route path='payment' element={<Payment />} ></Route>
      <Route path='order'>
        <Route path='success/:orderId' element={<OrderSuccessPage />}></Route>
      </Route>
    </Routes>
  )
}
