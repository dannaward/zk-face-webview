import { Container, Header, CtaSmallBtn, Footer } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { swapAbi } from "@/types/swap.abi";
import { getGasFee } from "@/utils";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import EtherIcon from "../../public/svgs/Ether.svg";
import MaticIcon from "../../public/svgs/Matic.svg";
import UpArrow from "../../public/svgs/UpArrow.svg";
import DownArrow from "../../public/svgs/DownArrow.svg";
import { useRouter } from "next/navigation";

const Send = () => {
  const [value, setValue] = useState(0);
  const [gasFee, setGasFee] = useState("");
  const router = useRouter();
  // TODO: swap contract call
  // const provider = new ethers.JsonRpcApiProvider("", 1);
  // const signer = new ethers.Wallet("WALLET_PRIVATE_KEY", provider);
  // const SwapContract = new ethers.Contract("", swapAbi, signer);

  useEffect(() => {
    getGasFee().then((res) => {
      setGasFee(res.fast);
    });
  }, []);

  // TODO: contract function call
  // const func = await SwapContract.func();
  return (
    <Container>
      <GlobalStyle />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* <Header /> */}
      {/* TODO: key 값으로 토큰변경 */}
      <SwapInputContainer>
        <SendAmountInput />
        <Image
          src={MaticIcon}
          alt={"MaticIcon"}
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        />
        <SwapTokenTitle>{"Matic"}</SwapTokenTitle>
      </SwapInputContainer>

      <Image src={UpArrow} alt="UpArrow" />
      <Image src={DownArrow} alt="DownArrow" />
      <SwapInputContainer>
        <SendAddressInput />
        <Image
          src={EtherIcon}
          alt={"EtherIcon"}
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        />
        <SwapTokenTitle>{"Ether"}</SwapTokenTitle>
      </SwapInputContainer>

      {/* <GasFeeContainer>
        <GasFeeInfo>{"Gas Fee"}</GasFeeInfo>
        <SetGasLimit type="number"></SetGasLimit>
      </GasFeeContainer> */}
      <SubmitBtn
        onClick={() => {
          router.push("/status");
        }}
      >
        {"Next"}
      </SubmitBtn>
      {/* <Footer /> */}
    </Container>
  );
};
export default Send;

const SwapInputContainer = styled.div`
  width: 295px;
  height: 61px;
  margin: 0 auto;
  margin-top: 5px;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 15px;
  background-color: ${colors.white};
`;

const SwapTokenTitle = styled.text`
  color: ${colors.black};
  font-size: 18px;
`;

const SendAmountInput = styled.input`
  font-size: 14px;
  border: none;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const SendAddressInput = styled.input`
  font-size: 14px;
  border: none;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
const GasFeeInfo = styled.div`
  color: ${colors.black};
  font-size: 30px;
`;
const SetGasLimit = styled.button`
  width: 291px;
  height: 182px;
  background-color: ${colors.white};
`;

const SubmitBtn = styled.button`
  margin-top: 20px;
  width: 291px;
  height: 51px;
  font-size: 30px;
  color: ${colors.white};
  background-color: ${colors.deepBlue};
  border: none;
`;

const GasFeeContainer = styled.form`
  width: 291px;
  height: 182px;
  margin: 0 auto;
  background-color: ${colors.white};
`;
