import { useCart } from "../../../hooks/useCart"
import { Container } from "../styles"

export function PayOrder(){
  const { cart } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += Number(item.subTotal)), 0)

  return(
    <Container>
      <button type='submit'>Pay</button>
      <span>
        Total <strong>U$ {totalAmount.toFixed(2)}</strong>
      </span>
    </Container>
  )


}
