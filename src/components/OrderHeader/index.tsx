import { Link } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { Container } from './styles'

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { useCart } from '../../hooks/useCart'

export function OrderHeader(){

  const { cart } = useCart()
  return(
    <Container>
      <Link to='/'>
        <img src={logoImg} alt='Logo' />
      </Link>
      <div>
        <div>
          <h3>My Orders</h3>
          <span>
            <strong>{`${cart.length}`.padStart(2, '0')}</strong> items
          </span>
        </div>
        <CartIcon />
      </div>

    </Container>
  )
}
