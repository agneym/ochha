import React from "react";
import styled from "styled-components";
import Field from "../components/Field";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

const StyledForm = styled.form`
  width: 80%;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

function Login() {
  return (
    <Container>
      <Title className="uk-heading-small uk-heading-divider uk-margin-large-bottom">
        LOGIN
      </Title>
      <StyledForm className="uk-form-stacked">
        <Field
          id="login-email-address"
          name="login-email-address"
          label="Email Address"
          placeholder="johndoe@email.com"
          autoComplete="email"
          type="email"
        />
        <Field
          id="login-password"
          name="login-password"
          placeholder="******"
          label="Password"
          autoComplete="current-password"
          type="password"
        />
        <button className="uk-button uk-button-secondary uk-width-1-1 uk-margin-small-top">
          LOGIN
        </button>
      </StyledForm>
    </Container>
  );
}

export default Login;
