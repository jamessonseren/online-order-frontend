import { Head } from "../../components/Head"
import { SnackTitles } from "../../components/SnackTitles"
import { Snacks } from "../../components/Snacks"


import { useSnack } from "../../hooks/useSnacks"

export default function IceCreams(){
  const { desserts }= useSnack()
  return (
    <>
    <Head title='Desserts'/>
    <SnackTitles>Desserts</SnackTitles>
    <Snacks snacks={desserts}></Snacks>


    </>
  )
}
