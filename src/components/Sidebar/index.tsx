import { Container } from "./styles"
import { useState } from "react"
import { NavLink } from "react-router-dom"

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
          <NavLink to="/">
            <BurgerIcon />
            <span>Hamburgers</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pizzas">
            <PizzaIcon />
            <span>Pizza</span>

          </NavLink>

        </li>
        <li>
          <NavLink to="/drinks">
            <SodaPopIcon />
            <span>Drinks</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/desserts">
            <IceCreamIcon />
            <span>Desserts</span>
          </NavLink>
        </li>

      </ul>
    </nav>

  </Container>
  )
}
