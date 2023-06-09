import { Container } from "./styles"
import { useState } from "react"

import { ReactComponent as BurgerIcon} from '../../assets/burger.svg'
import { ReactComponent as PizzaIcon} from '../../assets/pizza.svg'
import { ReactComponent as SodaPopIcon} from '../../assets/soda.svg'
import { ReactComponent as IceCreamIcon} from '../../assets/ice-cream.svg'

import menuImg from '../../assets/menu.svg'

export function SideBar(){

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
  <Container isMenuOpen={menuOpen}>
    <button type="button" onClick={handleToggleMenu}>
      <img src={menuImg} alt="Open and Close Menu" />
    </button>
    <nav>
      <ul>
        <li>
          <a href="#">
            <BurgerIcon />
            <span>Hamburgers</span>
          </a>
        </li>
        <li>
          <a href="#">
            <PizzaIcon />
            <span>Pizza</span>

          </a>

        </li>
        <li>
          <a href="#">
            <SodaPopIcon />
            <span>Soda</span>
          </a>
        </li>
        <li>
          <a href="#">
            <IceCreamIcon />
            <span>Desserts</span>
          </a>
        </li>

      </ul>
    </nav>

  </Container>
  )
}
