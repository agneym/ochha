import React from "react";
import { Formik, Field } from "formik";

import CustomField from "../components/Field";
import loginSchema from "./login-schema";
import { Container, StyledForm, Title } from "./AuthStyles";

function Login() {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Container>
      <Title className="uk-heading-small uk-heading-divider uk-margin-large-bottom">
        LOGIN
      </Title>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm className="uk-form-stacked">
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
              LOGIN
            </button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
}

export default Login;
