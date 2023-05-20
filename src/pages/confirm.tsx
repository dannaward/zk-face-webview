import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useState } from "react";
import styled from "styled-components";
import Script from "next/script";

const Confirm = () => {
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
      <ToAddressContainer>{"TO"}</ToAddressContainer>
      <TotalFeeContainer>{"Total Gas Fee"}</TotalFeeContainer>
      {/* <Footer /> */}
      { isClicked && <Script id="foo">{'window.webkit.messageHandlers.bridge.postMessage("onClickConfirm");'}</Script> }
    </Container>
  );
};
export default Confirm;

const ConfirmTitle = styled.text`
  justify-content: flex-start;
  font-size: 70px;
  color: ${colors.white};
`;

const ConfirmDescription = styled.text`
  font-size: 18px;
  color: ${colors.white};
`;

const ToAddressContainer = styled.div`
  margin: 0 auto;
  width: 332px;
  height: 96px;
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
