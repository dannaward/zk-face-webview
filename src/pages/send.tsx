import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useState } from "react";
import styled from "styled-components";

const Send = () => {
  const [balance, setBalance] = useState(0);
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SendAmountInput />
      <SendAddressInput />
      <Footer />
    </Container>
  );
};
export default Send;

const BalanceContainer = styled.div``;

const SendAmountInput = styled.input`
  margin-top: 20px;
  width: 295px;
  height: 61px;
  border-radius: 15px;
`;

const SendAddressInput = styled.input`
  margin-top: 20px;
  width: 295px;
  height: 61px;
  border-radius: 15px;
`;
const GasFeeContainer = styled.div``;
