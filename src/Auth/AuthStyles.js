import { Form } from "formik";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
`;

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
`;

export const StyledForm = styled(Form)`
  width: 80%;
  max-width: 500px;
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.warmBlack};
`;
