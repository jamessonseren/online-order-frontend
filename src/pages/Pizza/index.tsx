import { Head } from "../../components/Head"
import { SnackTitles } from "../../components/SnackTitles"
import { Snacks } from "../../components/Snacks"

import { useSnack } from "../../hooks/useSnacks"

export default function Pizzas() {
  const { pizzas }= useSnack()

  return (
    <>
      <Head title='Pizzas' />
      <SnackTitles>Pizzas</SnackTitles>
      <Snacks snacks={pizzas}></Snacks>

    </>
  )
}
