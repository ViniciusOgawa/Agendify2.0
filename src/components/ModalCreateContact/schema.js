import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  phone_number: yup
    .string()
    .required("O contato é obrigatório")
    .matches(/^\d{11}$/g, "Número de telefone inválido"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
  street: yup.string().required("A rua é obrigatória"),
  city: yup.string().required("A cidade é obrigatória"),
  number: yup.string().required("O número é obrigatório"),
  state: yup.string().required("O estado é obrigatório"),
});
