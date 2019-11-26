import React from "react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

function Login() {
  return (
    <Container>
      <h1 className="uk-heading-medium">LOGIN</h1>
      <hr className="uk-divider-small" />
      <form className="uk-form-stacked">
        <div className="uk-margin">
          <label className="uk-form-label">Email Address</label>
          <div class="uk-form-controls">
            <input className="uk-input" placeholder="johndoe@email.com" />
          </div>
        </div>
      </form>
    </Container>
  );
}

export default Login;
