import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { statusKey } from "@/types/statusKey";
import { useState } from "react";
import styled from "styled-components";

interface StatusProps {
  status: statusKey;
}

const Status = (props: StatusProps) => {
  const { status } = props;
  console.log("status", status);
  const [balance, setBalance] = useState(0);
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <TokenBalance>{"$" + balance}</TokenBalance>
      <BalanceContainer>
        <CtaSmallBtn key="Deposit" title="Deposit"></CtaSmallBtn>
        <CtaSmallBtn key="Send" title="Send"></CtaSmallBtn>
      </BalanceContainer>
      <Footer />
    </Container>
  );
};
export default Status;

const BalanceContainer = styled.div``;

const TokenBalance = styled.div`
  margin-top: 40px;
  color: ${colors.white};
  font-size: 96px;
`;
