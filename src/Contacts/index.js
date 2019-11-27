import React from "react";
import styled from "styled-components";

import { ReactComponent as SendIcon } from "../assets/send.svg";
import { ReactComponent as ReceiveIcon } from "../assets/plane-landing.svg";

const Header = styled.header`
  background-color: ${props => props.theme.colors.lightBlack};
  height: 70vh;
`;

function Contacts() {
  return (
    <Header>
      <SendIcon />
      <ReceiveIcon />
    </Header>
  );
}

export default Contacts;
