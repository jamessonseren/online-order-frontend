import { useSnack } from '../../hooks/useSnacks'
import { Head } from '../../components/Head'
import { SnackTitles } from '../../components/SnackTitles'
import { Snacks } from '../../components/Snacks'


export default function Burgers() {


  const { burgers }= useSnack()

  return (
    <>
      <Head title='Hamburgers' />
      <SnackTitles>Hamburgers</SnackTitles>
      <Snacks snacks={burgers}></Snacks>

    </>
  )
}
