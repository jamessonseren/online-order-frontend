import { Container } from "./styles";
import { Head } from "../../components/Head";

import { Table } from "./Table";

import { OrderHeader } from "../../components/OrderHeader";

export default function MyCart(){
  return(
    <Container>
      <Head title='Cart'/>
      <OrderHeader />
      <Table />
    </Container>
  )
}
