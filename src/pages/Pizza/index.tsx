import { Head } from "../../components/Head"
import { SnackTitles } from "../../components/SnackTitles"
import { Snacks } from "../../components/Snacks"

export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'Pizza',
      name: 'Pepperoni',
      description: 'Brazilian style food with pepperoni, cheese, and onions',
      price: 9.56,
      image: 'https://media.istockphoto.com/id/1314368528/pt/foto/brazilian-style-pizza-with-mozzarella-cheese-pepperoni-sausage-and-onion-top-view.webp?s=1024x1024&w=is&k=20&c=D99g39zgfKcblIVeCA_n5YjKRR6luulHpgZXE0M0Bxw=',
    },
    {
      id: 2,
      snack: 'Pizza',
      name: 'Margherita',
      description: 'Delicious italian Margherita pizza with tomatoes and cheese',
      price: 9.85,
      image: 'https://media.istockphoto.com/id/1414575281/pt/foto/a-delicious-and-tasty-italian-pizza-margherita-with-tomatoes-and-buffalo-mozzarella.webp?s=1024x1024&w=is&k=20&c=0z2tURHptlwSCz_r33U8y_1z7K5cge-3wX2BACdOi_Y=',
    },
    {
      id: 3,
      snack: 'Pizza',
      name: 'Bacon and Brocolli',
      description: 'Delicious Bacon and Brocolli Pizza',
      price: 8.15,
      image: 'https://media.istockphoto.com/id/1390950332/pt/foto/bacon-and-broccoli-pizza.webp?s=1024x1024&w=is&k=20&c=jb0sOS2TLx3gMVpGpum5kkrTxRJh8CTvLOjgmpuyAeA=',
    },
  ]
  return (
    <>
      <Head title='Pizzas' />
      <SnackTitles>Pizzas</SnackTitles>
      <Snacks snacks={data}></Snacks>

    </>
  )
}
