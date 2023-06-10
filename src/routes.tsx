import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Burgers'
import PizzasPage from './pages/Pizza'
import DrinksPage from './pages/Drinks'
import DessertsPage from './pages/Desserts'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='/' element={<BurgersPage />}/>
        <Route path='pizzas' element={<PizzasPage />}/>
        <Route path='drinks' element={< DrinksPage />}/>
        <Route path='desserts' element={< DessertsPage />}/>

      </Route>
    </Routes>
  )
}
