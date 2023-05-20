import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { BsFire } from "react-icons/bs";

const Confirm = () => {
  const route = useRouter();
  console.log("route", route.query.matic);
  console.log("route", route.query.eth);
  const [balance, setBalance] = useState(0);

  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <ConfirmTitle>{"Confirm"}</ConfirmTitle>
      <br />
      <ConfirmDescription>
        {"Does your transaction look correct?"}
      </ConfirmDescription>

      <AmountContainer>
        <FromContainer>From</FromContainer>
        <FromValueContainer>{200}</FromValueContainer>
        <ToContainer>To</ToContainer>
      </AmountContainer>
      <span>
        <TfiArrowsHorizontal size={60} />
      </span>
      {/* <ToContainer>{"ETH"}</ToContainer> */}

      <TotalFeeContainer>
        {"Total Gas Fee"}
        <p>
          <BsFire size={30} />
        </p>
      </TotalFeeContainer>
      <ConfirmBtn>{"Confirm"}</ConfirmBtn>
      {/* <Footer /> */}
    </Container>
  );
};

export default Confirm;

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

const FromContainer = styled.span`
  width: 50px;
`;
const FromValueContainer = styled.span`
  width: 50px;
`;
const ToContainer = styled.span`
  width: 50px;
`;

const AmountContainer = styled.div`
  // margin: 0 auto;
  // width: 332px;
  // height: 96px;
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.white};
`;

const TotalFeeContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 332px;
  height: 96px;
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
