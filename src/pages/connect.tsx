import { Container, Header, CtaSmallBtn } from "@/components";
import { colors } from "@/constant/colors";
import { GlobalStyle } from "@/styles/global.style";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Main = () => {
  const CONNECT_DES = `Register your ID on our wallet with top-tier \nprivacy protection solution!`;
  const CONNECT_BTN_TITLE = "Connect Polygon ID";
  const router = useRouter();
  return (
    <Container>
      <GlobalStyle />
      {/* <Header /> */}
      <ConnectDescription>{CONNECT_DES}</ConnectDescription>
      <ConnectPolygonBtn
        onClick={() => {
          // TODO: 얼굴인식 화면으로
          router.push(`/main`);
        }}
      >
        {CONNECT_BTN_TITLE}
      </ConnectPolygonBtn>
    </Container>
  );
};
export default Main;

const ConnectDescription = styled.div`
  white-space: pre-line;
  margin-top: 50%;
  color: ${colors.white};
  font-size: 12px;
`;

const ConnectPolygonBtn = styled.button`
  width: 291px;
  height: 51px;
  margin-top: 10%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.deepBlue};
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  font-size: 30px;
`;
