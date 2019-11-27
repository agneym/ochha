import * as Yup from "yup";

const registerSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please input a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().min(
    8,
    "Please input a password of at least 8 characters."
  ),
});

export default registerSchema;
