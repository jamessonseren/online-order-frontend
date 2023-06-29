import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IMaskInput } from 'react-imask';
import { yupResolver } from '@hookform/resolvers/yup';

import { CustomerData } from "../../Interfaces/CustomerData";

import { useCart } from "../../hooks/useCart";

import { Head } from '../../components/Head'
import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { OrderHeader } from '../../components/OrderHeader'
import { Container, Inner, Form } from './styles'

import { schema, FieldValues } from "./ValidationSchema";
import IMask from "imask";



export default function Payment() {

  const { payOrder } = useCart()

  const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver<FieldValues>(schema)
  });

  const onSubmit: SubmitHandler<FieldValues> = data => payOrder(data as CustomerData);
  return (
    <Container>
      <Head title='Payment' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Personal Information</h4>

          <div className='field'>
            <label htmlFor='fullName'>Name and Surname *</label>

            <Controller
              name='fullName'
              control={control}
              defaultValue=""
              render={({field}) => (
                <input type='text' id='fullName' autoComplete="name" onChange={field.onChange} onBlur={field.onBlur} value={field.value} />
              )}
            />

            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
          </div>
          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail *</label>

              <Controller
              name='email'
              control={control}
              defaultValue=""
              render={({field}) => (
                <input type='email' id='email' autoComplete="email" onChange={field.onChange} onBlur={field.onBlur} value={field.value} />
              )}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}

            </div>

            <div className='field'>
              <label htmlFor='phone'>Phone Number *</label>
              <Controller
              name='phone'
              control={control}
              defaultValue=""
              render={({field}) => (
                <IMaskInput
                  type='tel'
                  id='phone'
                  autoComplete='phone'
                  mask={'(00) 90000-0000'}

                  onChange={field.onChange} onBlur={field.onBlur} value={field.value}
                />
                )}
            />
              {errors.phone && <p className="error">{errors.phone.message}</p>}

            </div>

            <div className='field'>
              <label htmlFor='document'> CPF / CNPJ *</label>
              <Controller
              name='document'
              control={control}
              defaultValue=""
              render={({field}) => (
                <IMaskInput
                  type='text'
                  id='document'
                  mask={[
                    {mask: '000.000.000-00', maxLength: 11},
                    {mask: '00.000.000/0000-00'}
                  ]}
                  onChange={field.onChange} onBlur={field.onBlur} value={field.value}
                />
                )}
            />
              {errors.document && <p className="error">{errors.document.message}</p>}
            </div>
          </div>
          <h4>Delivery Address</h4>

          <div className='field'>
            <label htmlFor='zipCode'>Zip Code *</label>
            <Controller
              name='zipCode'
              control={control}
              render={({field}) => (
                <IMaskInput
                  type='text'
                  id='zipCode'
                  style={{ width: '120px'}}
                  mask={'00000-000'}
                  onChange={field.onChange} onBlur={field.onBlur} value={field.value}
                />
                )}
            />
              {errors.zipCode && <p className="error">{errors.zipCode.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='street'>Street *</label>
            <Controller
              name='street'
              control={control}
              defaultValue=""
              render={({field}) => (
                <input type='text' id='street'  onChange={field.onChange} onBlur={field.onBlur} value={field.value} />

                )}
            />
              {errors.street && <p className="error">{errors.street.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Number *</label>
              <Controller
                name='number'
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input type='text' id='number' onChange={field.onChange} onBlur={field.onBlur} value={field.value} />

                )}
            />
              {errors.number && <p className="error">{errors.number.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complement</label>
              <Controller
                name='complement'
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input type='text' id='complement' onChange={field.onChange} onBlur={field.onBlur} value={field.value} />

                )}
            />
              {errors.complement && <p className="error">{errors.complement.message}</p>}
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Neighborhood *</label>
              <Controller
                name='neighborhood'
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input type='text' id='neighborhood' onChange={field.onChange} onBlur={field.onBlur} value={field.value} />

                )}
            />
              {errors.neighborhood && <p className="error">{errors.neighborhood.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='city'>City *</label>
              <Controller
                name='city'
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input type='text' id='city' onChange={field.onChange} onBlur={field.onBlur} value={field.value} />

                )}
            />
              {errors.city && <p className="error">{errors.city.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='state'>State *</label>
              <Controller
                name='state'
                control={control}
                defaultValue="AC"
                render={({ field }) => (
                  <select id='state' onChange={field.onChange} onBlur={field.onBlur} value={field.value}>
                    <option value=''>Selecione</option>
                    <option value='AC'>Acre</option>
                    <option value='AL'>Alagoas</option>
                    <option value='AP'>Amapá</option>
                    <option value='AM'>Amazonas</option>
                    <option value='BA'>Bahia</option>
                    <option value='CE'>Ceará</option>
                    <option value='ES'>Espírito Santo</option>
                    <option value='GO'>Goiás</option>
                    <option value='MA'>Maranhão</option>
                    <option value='MT'>Mato Grosso</option>
                    <option value='MS'>Mato Grosso do Sul</option>
                    <option value='MG'>Minas Gerais</option>
                    <option value='PA'>Pará</option>
                    <option value='PB'>Paraíba</option>
                    <option value='PR'>Paraná</option>
                    <option value='PE'>Pernambuco</option>
                    <option value='PI'>Piauí</option>
                    <option value='RJ'>Rio de Janeiro</option>
                    <option value='RN'>Rio Grande do Norte</option>
                    <option value='RS'>Rio Grande do Sul</option>
                    <option value='RO'>Rondônia</option>
                    <option value='RR'>Roraima</option>
                    <option value='SC'>Santa Catarina</option>
                    <option value='SP'>São Paulo</option>
                    <option value='SE'>Sergipe</option>
                    <option value='TO'>Tocantins</option>
                    <option value='DF'>Distrito Federal</option>
                  </select>
                )}
              />
              {errors.state && <p className='error'>{errors.state.message}</p>}
            </div>
          </div>

          <h4>Payment</h4>

          <div className='field'>
            <label htmlFor='creditCard'>Credit card number *</label>
            <Controller
              name='creditCard'
              control={control}
              defaultValue=""
              render={({field}) => (
                <IMaskInput
                  type='text'
                  id='creditCard'
                  mask={[
                    {
                      mask: '0000 000000 0000',
                      maxLength: 14
                    },
                    {
                      mask: '0000 000000 00000',
                      maxLength: 15
                    },
                    {
                      mask: '0000 0000 0000 0000'
                    }

                  ]}
                  onChange={field.onChange} onBlur={field.onBlur} value={field.value}
                />
                )}
            />
              {errors.creditCard && <p className="error">{errors.creditCard.message}</p>}
          </div>
          <div className='field'>
            <label htmlFor='creditCardHolder'>Card holder name *</label>
            <Controller
                name='creditCardHolder'
                control={control}
                defaultValue=""
                render={({field}) => (
                  <input type='text' id='creditCardHolder' onChange={field.onChange} onBlur={field.onBlur} value={field.value} />

                )}
            />
              {errors.creditCardHolder && <p className="error">{errors.creditCardHolder.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='creditCardExpiration'>Expiry Date (MM/YY) *</label>
              <Controller
              name='creditCardExpiration'
              control={control}
              render={({field}) => (
                <IMaskInput
                  type='text'
                  id='creditCardExpiration'
                  style={{ width: '120px'}}
                  mask={[
                    {
                      mask: 'MM/YY',
                      blocks: {
                        MM: {
                          mask: IMask.MaskedRange,
                          from: 1,
                          to: 12,
                        },
                        YY: {
                          mask: IMask.MaskedRange,
                          from: new Date().getFullYear() - 2000,
                          to: 99
                        },
                      },
                    },
                  ]}
                  onChange={field.onChange} onBlur={field.onBlur} value={field.value}
                />
                )}
            />
              {errors.creditCardExpiration && <p className="error">{errors.creditCardExpiration.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='creditCardSecurityCode'>CVV *</label>
              <Controller
              name='creditCardSecurityCode'
              control={control}
              defaultValue=""
              render={({field}) => (
                <IMaskInput
                  type='text'
                  id='creditCardSecurityCode'
                  mask={'0000'}
                  onChange={field.onChange} onBlur={field.onBlur} value={field.value}
                />
                )}
            />
              {errors.creditCardSecurityCode && <p className="error">{errors.creditCardSecurityCode.message}</p>}
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
