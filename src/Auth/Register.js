import React from "react";
import { Formik, Field } from "formik";

import CustomField from "../components/Field";
import registerSchema from "./register-schema";
import { Container, StyledForm, Title, StyledLink } from "./AuthStyles";

function Register() {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Container>
      <Title className="uk-heading-small uk-heading-divider uk-margin-large-bottom">
        REGISTER
      </Title>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm className="uk-form-stacked">
            <Field
              id="name"
              name="name"
              label="Name"
              placeholder="John Doe"
              autoComplete="name"
              component={CustomField}
              error={touched.name && errors.name}
            />
            <Field
              id="email"
              name="email"
              label="Email Address"
              placeholder="johndoe@email.com"
              autoComplete="email"
              type="email"
              component={CustomField}
              error={touched.email && errors.email}
            />
            <Field
              id="password"
              name="password"
              placeholder="******"
              label="Password"
              autoComplete="current-password"
              type="password"
              component={CustomField}
              error={touched.password && errors.password}
            />
            <button
              className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-top"
              type="submit"
            >
              SIGN UP
            </button>
          </StyledForm>
        )}
      </Formik>
      <StyledLink to="/auth/login" className="uk-margin-large-top">
        Login
      </StyledLink>
    </Container>
  );
}

export default Register;
