import { useCart } from "../../hooks/useCart"

import { Container } from "./styles"
import { ReactComponent as Carticon } from '../../assets/shopping-cart.svg'

export function MyOrder(){
  const { cart } = useCart()

  return (
  <Container to='cart'>
    <span>My Order</span>
    <Carticon />
    {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
  </Container>
  )
}
