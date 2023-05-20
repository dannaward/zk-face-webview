import { Container, CtaLargeBtn, Title } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { pageKey } from "@/types/pageKey";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  const SettingWalletTitle = "Setting Wallet";
  const WalletTitle = "Import your wallet or create a new wallet";
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title />
        {/* TODO: key 값 enum 으로 바꾸기 */}
        <SettingBtn>{SettingWalletTitle}</SettingBtn>
        <br />
        <BtnDescription>{WalletTitle}</BtnDescription>
        <br />
        <BtnContainer>
          <CtaLargeBtn key={"connect"} title={"Import your wallet"} />
          <CtaLargeBtn key={"create"} title={"Create a new wallet"} />
        </BtnContainer>
      </Container>
    </>
  );
}

const BtnContainer = styled.div`
  flex-direction: row;
  text-algin: center;
`;
const SettingBtn = styled.text`
  color: ${colors.white};
  font-size: 30px;
`;

const BtnDescription = styled.text`
  margin-top: 30px;
  color: ${colors.white};
  font-size: 12px;
`;
