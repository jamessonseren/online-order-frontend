import { useCart } from "../../../hooks/useCart"
import { Container } from "../styles"
export function ConfirmOrder(){
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subTotal)), 0)

  return(
    <Container>
      <button type='button' onClick={confirmOrder}>Complete Order</button>
      <span>
        Total <strong>U$ {totalAmount.toFixed(2)}</strong>
      </span>
    </Container>
  )


}
