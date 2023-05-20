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
      {/* <SetGasLimit type={} /> */}
      <SubmitBtn type="submit">{"Next"}</SubmitBtn>
      <Footer />
    </Container>
  );
};
export default Send;

const BalanceContainer = styled.div``;

const SendAmountInput = styled.input`
  margin-top: 40px;
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

const SetGasLimit = styled.input`
  width: 291px;
  height: 182px;
`;

const SubmitBtn = styled.button``;
const GasFeeContainer = styled.div``;
