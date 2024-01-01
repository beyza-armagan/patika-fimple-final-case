import * as yup from "yup";

export const applicationForm = yup.object().shape({
  name: yup.string().required("Bu alan zorunludur"),
  surname: yup.string().required("Bu alan zorunludur"),
  age: yup
    .number("")
    .typeError("Lütfen bir sayı girin")
    .positive("Lütfen pozitif bir sayı girin")
    .integer("Lütfen tam sayı girin")
    .required("Bu alan zorunludur"),
  tc: yup
    .string()
    .typeError("TC must be a number")
    .matches(/^\d+$/, "Lütfen geçerli bir TC numarası girin")
    .required("Bu alan zorunludur"),
  applicationReason: yup.string().required("Bu alan zorunludur"),
  address: yup.string().required("Bu alan zorunludur"),
  file: yup.string(),
  date: yup.string(),
});
