import * as yup from "yup";
import { isValidPhone, isValidCNPJ, isValidCPF} from '@brazilian-utils/brazilian-utils'
import isValidCreditCard from 'card-validator'

export const schema = yup.object({
  fullName: yup
    .string()
    .required("This field must be completed")
    .min(3, 'Name is very short')
    .matches(/(\w.+\s).+/gi, "This field must contain last name"),
  email: yup.string().required('This field must be completed'),
  phone: yup
    .string()
    .required('This field must be completed')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test('validateMobile', 'Invalid Number', (value) => isValidPhone(value)),
  document:yup
    .string()
    .required('This field must be completed')
    .transform((value) => value.replace(/[^\d]/g, ''))
    .test('validateDocument', 'Invalid CPF/CNPJ', (value) => isValidCNPJ(value) || isValidCPF(value)),
  zipCode: yup
    .string()
    .required('This field must be completed')
    .transform((value) => value.replace(/[^\d]/g, '')),
  street: yup.string().required('This field must be completed'),
  complement: yup.string(),
  number: yup.string().required('This field must be completed'),
  neighborhood: yup.string().required('This field must be completed'),
  city: yup.string().required('This field must be completed'),
  state: yup.string().required('This field must be completed'),
  creditCard: yup
    .string()
    .required('This field must be completed')
    .test('validateCreditCardNumber','Invalid Credit Card',
    (value) => isValidCreditCard.number(value).isValid ),
  creditCardHolder: yup
    .string()
    .required('This field must be completed')
    .min(3, 'Insert full name')
    .matches(/(\w.+\s).+/gi, 'Last name missing'),
  creditCardExpiration: yup
    .string()
    .required('This field must be completed')
    .transform((value) =>{
      const [month, year] = value.split('/')

      if(month && year && month.length === 2 && year.length === 2)
       return new Date(+`20${year}`, +month - 1, 1).toISOString()

      return value
      })
    .test('validateCreditCardExpiration', 'Invalid expiry date', (value) => new Date(value) >= new Date()),
  creditCardSecurityCode: yup
    .string()
    .required('This field must be completed')
    .transform((value) => value.replace(/[^\d]+/g, ''))
    .min(3, 'CVV must contain 3 to 4 digits')
    .max(4, 'CVV must contain 3 to 4 digits'),

})
  .required();


export type FieldValues = yup.InferType<typeof schema>;
