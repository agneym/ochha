import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email address")
    .required("Please enter your email address"),
  password: Yup.string().min(
    8,
    "Please input a password of at least 8 characters."
  ),
});

export default loginSchema;
