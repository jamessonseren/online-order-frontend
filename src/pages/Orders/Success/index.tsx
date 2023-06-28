import { useParams } from 'react-router-dom'

import { Head } from '../../../components/Head'

import { Container, Inner, SubTitle, Title } from './styles'

export default function OrderSuccessPage() {
  const { orderId } = useParams()

  return (
    <Container>
      <Head title='Payment confirmed' />

      <Inner>
        <Title>Payment confirmed</Title>

        <p>
          Order No. <code>#{orderId}</code>
        </p>

        <SubTitle>Store contact info</SubTitle>

        <ul>
          <li>Address: Av Central, 123</li>
          <li>Phone: 11 98412-4578</li>
        </ul>

        <br />
        <a href='/'>Home</a>
      </Inner>
    </Container>
  )
}
