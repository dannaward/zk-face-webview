import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { getMaticBalance } from "@/utils";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import Image from "next/image";
import MaticIcon from "../../public/svgs/Matic.svg";

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
        <CtaSmallBtn key="Swap" title="Swap"></CtaSmallBtn>
      </BalanceContainer>
      <TokenListContainer>
        <Image
          src={MaticIcon}
          alt={"MaticIcon"}
          style={{
            width: 30,
            height: 30,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <TokenListBalance>{balance}</TokenListBalance>
        <TokenListUnit>{"MATIC"}</TokenListUnit>
      </TokenListContainer>
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
  // margin-top: 20%;
`;
const TokenBalance = styled.text`
  color: ${colors.white};
  font-size: 96px;
`;
const TokenListBalance = styled.text`
  color: ${colors.white};
  font-size: 40px;
`;

const TokenListContainer = styled.div`
  width: 327px;
  display: flex;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 27px;
  text-align: center;
  background-color: ${colors.deepBlue};
`;

const TokenUnit = styled.text`
  color: ${colors.white};
  font-size: 48px;
`;
const TokenListUnit = styled.text`
  color: ${colors.white};
  font-size: 40px;
`;
