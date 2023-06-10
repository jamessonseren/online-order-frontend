import { Head } from '../../components/Head'
import { SnackTitles } from '../../components/SnackTitles'
import { Snacks } from '../../components/Snacks'

export default function Soda() {
  const data = [
    {
      id: 1,
      snack: 'Drinks',
      name: 'Vanilla Vodka',
      description: 'Delicious drink with Whiskey, Apple Juice, and Pinch of Ground Cinnamon',
      price: 8.5,
      image: 'https://i.imgur.com/fIf86bh.jpeg',
    },
    {
      id: 2,
      snack: 'Drinks',
      name: 'Amazing Apple Juice',
      description: 'Apple juice with ginger beer, seltzer, and bourbon',
      price: 6.85,
      image: 'https://i.imgur.com/NOZtMV3.png',
    },
    {
      id: 3,
      snack: 'Drinks',
      name: 'Special Orange Juice',
      description: 'Orange juice with maple syrup and angostura bitters.',
      price: 7.10,
      image: 'https://i.imgur.com/j1zL2pB.jpeg',
    },
  ]
  return (
    <>
      <Head title='Drinks' />
      <SnackTitles>Drinks</SnackTitles>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
