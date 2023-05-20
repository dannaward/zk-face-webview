import { colors } from "@/constant/colors";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import {useState} from "react";
import Script from "next/script";

interface SmallProps {
  key: string;
  title: string;
}

const CtaSmallBtn = (props: SmallProps) => {
  const { title, key } = props;
  const router = useRouter();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          // TODO: 얼굴인식 화면으로
          // router.push(`/send`);

          setIsClicked(!isClicked);
        }}
      >
        <Title>{title}</Title>
      </Button>
      { isClicked && <Script id="foo">{'window.webkit.messageHandlers.bridge.postMessage("onClickSend");'}</Script> }
    </>
  );
};

export default CtaSmallBtn;

const Button = styled.button`
  width: 134px;
  height: 38px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 15px 0px 15px;
  background-color: ${colors.white};
  border-radius: 20px;
  border: none;
`;

const Title = styled.text`
  color: ${colors.deepBlue};
  font-size: 20px;
  font-weight: bold;
`;
