import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import Script from "next/script";
import { TfiArrowsHorizontal } from "react-icons/tfi";
import { BsFire } from "react-icons/bs";

const Confirm = () => {
  const route = useRouter();
  console.log("route", route.query.matic);
  console.log("route", route.query.eth);
  const [balance, setBalance] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <ConfirmTitle>{"Confirm"}</ConfirmTitle>
      <br />
      <ConfirmDescription>
        {"Does your transaction look correct?"}
      </ConfirmDescription>

      {/* <AmountContainer>
        <FromContainer>From</FromContainer>
        <FromValueContainer>{200}</FromValueContainer>
        <ToContainer>To</ToContainer>
      </AmountContainer> */}
      <TotalFeeContainer>
        <p>{"200\nMATIC"}</p>
        <TfiArrowsHorizontal
          size={30}
          style={{ color: colors.black }}
        />
        <p>{"10\nETH"}</p>
      </TotalFeeContainer>

      {/* <ToContainer>{"ETH"}</ToContainer> */}

      <GasFeeContainer>
        <BsFire size={60} />
        <GasFeeTextContainer>
          <p>
            {"Total Gas Fee"}
          </p>
          <p>{0.00087}</p>
        </GasFeeTextContainer>
      </GasFeeContainer>
      <ConfirmBtn onClick={() => { setIsClicked(!isClicked) }}>Confirm</ConfirmBtn>
      {/* <Footer /> */}
      { isClicked && <Script id="foo">{'window.webkit.messageHandlers.bridge.postMessage("onClickConfirm");'}</Script> }
    </Container>
  );
};

export default Confirm;

const ConfirmTitle = styled.h1`
  justify-content: flex-start;
  font-size: 70px;
  color: ${colors.white};
  
  margin-top: 30px;
  margin-bottom: 0px;
`;

const ConfirmDescription = styled.h2`
  font-size: 18px;
  color: ${colors.white};
  margin-bottom: 20px;
`;

const FromContainer = styled.p``;
const FromValueContainer = styled.span`
  width: 50px;
`;
const ToContainer = styled.span`
  width: 50px;
`;

const AmountContainer = styled.div`
  flex-direction: column;
  border-radius: 15px;
  background-color: ${colors.white};
`;

const TotalFeeContainer = styled.div`
  margin: 0 auto;
  width: 332px;
  height: 96px;
  border-radius: 15px;
  background-color: ${colors.white};
  font-size: 25px;
  white-space: pre-wrap;
  color: ${colors.red};
  
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  p {
    width: 100px;
  }
`;

const GasFeeContainer = styled.div`
  margin: 0 auto;
  width: 332px;
  //height: 96px;
  border-radius: 15px;
  background-color: ${colors.white};
  font-size: 30px;
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const GasFeeTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 8px;
  
  p {
    font-size: 20px;
    margin: 0;
  }
`;

const ConfirmBtn = styled.button`
  width: 332px;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
  font-size: 30px;
  border: none;
  border-radius: 100px;
  
  margin-top: 50px;
  padding: 10px;
`;
