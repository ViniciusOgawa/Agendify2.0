import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  name: yup.string().nullable().notRequired().label("Nome"),
  phoneNumber: yup
    .string()
    .test("phoneNumber", "Número de telefone inválido", function (value) {
      const { createError, path, parent } = this;

      if (parent.phoneNumber && parent.phoneNumber.trim() !== "") {
        if (!/^\d{11}$/g.test(value)) {
          return createError({ path, message: "Número de telefone inválido" });
        }
      }

      return true;
    }),
  email: yup
    .string()
    .nullable()
    .notRequired()
    .email("O email digitado é inválido"),
  password: yup.string().nullable().notRequired(),
});
