import { Head } from '../../components/Head'
import { SnackTitles } from '../../components/SnackTitles'
import { Snacks } from '../../components/Snacks'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Mega',
      description: 'Tamanho artesanal família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://i.imgur.com/L5IhOun.png',
    },
    {
      id: 2,
      snack: 'burger',
      name: 'Big Burger Bacon',
      description: 'Criado para os amantes e bacon, possui em todas as camadas bacon bem assado.',
      price: 25.5,
      image: 'https://i.imgur.com/3ccsTEQ.jpeg',
    },
  ]
  return (
    <>
      <Head title='Hamburgers' />
      <SnackTitles>Hamburgers</SnackTitles>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
