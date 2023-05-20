import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/Md";

const Success = () => {
  const route = useRouter();
  console.log("route", route.query.matic);
  console.log("route", route.query.eth);
  const [txHash, setTxHash] = useState("0x582f468e73e4f33cks3ml43882s6e851a4");
  const [zkProof, setZkProof] = useState(
    "011010101010000000000010001101010101010010101010001000001022000200101000101010"
  );

  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <ConfirmTitle>{"Success!"}</ConfirmTitle>
      <br />
      <ConfirmDescription>
        {"Your transaction has been successed"}
      </ConfirmDescription>

      <AmountContainer>
        <p>
          <AiOutlineFileDone size={30} />
        </p>
        <ToContainer>{"TxHash"}</ToContainer>
        <ToContainer>{txHash}</ToContainer>
      </AmountContainer>
      <AmountContainer>
        <p>
          <MdVerifiedUser size={30} />
        </p>
        <FromContainer>{"ZkProof"}</FromContainer>
        <FromContainer>{zkProof}</FromContainer>
      </AmountContainer>
      <ConfirmBtn>{"Confirm"}</ConfirmBtn>
      {/* <Footer /> */}
    </Container>
  );
};

export default Success;

const ConfirmTitle = styled.text`
  justify-content: flex-start;
  font-size: 70px;
  color: ${colors.white};
`;

const ConfirmDescription = styled.div`
  font-size: 18px;
  color: ${colors.white};
  margin-bottom: 20px;
`;

const FromContainer = styled.div`
  padding: 5px;
  word-break: break-all;
`;
const ToContainer = styled.div`
  word-break: break-all;
`;

const AmountContainer = styled.div`
  margin: 0 auto;
  width: 332px;
  height: auto;
  border-radius: 15px;
  background-color: ${colors.white};
`;

const TotalFeeContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 332px;
  border-radius: 15px;
  background-color: ${colors.white};
`;
const GasFeeContainer = styled.div``;
const ConfirmBtn = styled.button`
  width: 332px;
  height: 36px;
  margin-top: 20px;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
  font-size: 30px;
  border: none;
  border-radius: 15px;
`;
