import * as Yup from "yup";

export const validations = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  email: Yup.string().email(),
  numberContact: Yup.number().required().positive().integer(),
  // message: Yup.required("Requerido")
});
