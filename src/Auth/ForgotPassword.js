import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";

import CustomField from "../components/Field";
import { Container, StyledForm, Title } from "./AuthStyles";

const forgotSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please input a valid email address")
    .required("Please enter your email address"),
});

function ForgotPassword() {
  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Container>
      <Title className="uk-heading-small uk-heading-divider uk-margin-large-bottom">
        FORGOT
        <br />
        PASSWORD
      </Title>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={forgotSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm className="uk-form-stacked">
            <Field
              id="email"
              name="email"
              label="Registered Email Address"
              placeholder="johndoe@email.com"
              autoComplete="email"
              type="email"
              component={CustomField}
              error={touched.email && errors.email}
            />
            <button
              className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-top"
              type="submit"
            >
              CONFIRM
            </button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
}

export default ForgotPassword;
