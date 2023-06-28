import { useCart } from "../../../hooks/useCart"
import { useState, useEffect } from 'react'

import { TableDesktop } from "./TableDesktop"
import { TableMobile } from "./TableMobile"
import { EmptyCart } from "../../../components/EmptyCart"


export function Table(){
const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

const { cart } = useCart()

useEffect(() => {
  function updateTableComponentBasedInWindowWidth(){
    const currentWidth = document.documentElement.clientWidth
    setWindowWidth(currentWidth)
  }

  window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

  return () => {
    window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
  }
}, [])

  if(cart.length === 0) return <EmptyCart title="It looks like you have not selected anything yet"/>

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
