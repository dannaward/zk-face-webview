import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { getMaticBalance } from "@/utils";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";

const Main = () => {
  const [balance, setBalance] = useState("");

  const data = {
    // TODO: address local address 로 바꾸기
    address: "0xBB89d3aD7662B2e5B06b796BB040B3aEe25F8e0e",
    tag: "latest",
  };

  useEffect(() => {
    const balanceData = getMaticBalance(data).then((res) => {
      const balanceNum = ethers.formatUnits(res.result).toString();
      setBalance(balanceNum);
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <TokenContainer>
        <TokenBalance>{balance}</TokenBalance>
        <TokenUnit>{"MATIC"}</TokenUnit>
      </TokenContainer>

      <BalanceContainer>
        <CtaSmallBtn key="Deposit" title="Deposit"></CtaSmallBtn>
        <CtaSmallBtn key="Send" title="Send"></CtaSmallBtn>
      </BalanceContainer>
      {/* <Footer /> */}
    </Container>
  );
};

export default Main;

const BalanceContainer = styled.div`
  color: ${colors.white};
  font-size: ;
`;
const TokenContainer = styled.div`
  margin-top: 20%;
`;
const TokenBalance = styled.text`
  color: ${colors.white};
  font-size: 96px;
`;

const TokenUnit = styled.text`
  color: ${colors.white};
  font-size: 48px;
`;
