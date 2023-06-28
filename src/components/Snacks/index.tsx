import { Container } from "./styles"
import { FiPlus} from 'react-icons/fi'
import { SkeletonSnacks } from "./SkeletonSnacks/index"

import { useCart } from "../../hooks/useCart"

import { SnacksData } from "../../Interfaces/SnacksData"

interface SnacksProps{
snacks: SnacksData[]
}


export function Snacks({ snacks }: SnacksProps){

  const {cart, addSnackIntoCart} = useCart()

  return (
    <Container>
      {!snacks.length
      ? [1, 2, 3, 4].map((n) => <SkeletonSnacks key={n}/> )

      : snacks.map((snack) => {
        const snackExists = cart.find(
          (item) => item.snack === snack.snack && item.id === snack.id
        )
        return (
        <div key={snack.id} className="snack">
          {snackExists && <span>{snackExists.quantity}</span>}
         <h2>{snack.name}</h2>
         <img src={snack.image} alt={snack.name}/>
         <p>{snack.description}</p>
         <div>
          <strong>{snack.price}</strong>
          <button type="button" onClick={() => addSnackIntoCart(snack)}><FiPlus /></button>
         </div>
        </div>
      )
        })

      }
    </Container>
  )
}
