import * as yup from "yup";

export const createContactSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  phoneNumber: yup
    .string()
    .required("O contato é obrigatório")
    .matches(/^\d{11}$/g, "Número de telefone inválido"),
  email: yup
    .string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),
});
