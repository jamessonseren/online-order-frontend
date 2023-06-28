import { Head } from '../../components/Head'
import { SnackTitles } from '../../components/SnackTitles'
import { Snacks } from '../../components/Snacks'

import { useSnack } from '../../hooks/useSnacks'

export default function Drinks() {
  const { drinks }= useSnack()

  return (
    <>
      <Head title='Drinks' />
      <SnackTitles>Drinks</SnackTitles>
      <Snacks snacks={drinks}></Snacks>
    </>
  )
}
