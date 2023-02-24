import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ButtonLinkContainer = styled(NavLink)`
  text-decoration: none;
  color: #222;
`;

const ButtonLink = ({ to, children }: any) => (
  <ButtonLinkContainer to={to}>{children}</ButtonLinkContainer>
);

export default ButtonLink;
