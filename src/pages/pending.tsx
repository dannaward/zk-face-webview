import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";

const Pending = () => {
  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <ConfirmTitle>{"Pending..."}</ConfirmTitle>
      <br />
      <ConfirmDescription>{"Please wait for a second"}</ConfirmDescription>
    </Container>
  );
};

export default Pending;

const ConfirmTitle = styled.text`
  font-size: 70px;
  color: ${colors.white};
`;

const ConfirmDescription = styled.text`
  font-size: 18px;
  color: ${colors.white};
`;
