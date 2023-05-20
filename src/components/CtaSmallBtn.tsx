import { colors } from "@/constant/colors";
import { useRouter } from "next/navigation";
import styled from "styled-components";

interface SmallProps {
  key: string;
  title: string;
}

const CtaSmallBtn = (props: SmallProps) => {
  const { title, key } = props;
  console.log("key", props.key);
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        // TODO: 얼굴인식 화면으로
        router.push(`/send`);
      }}
    >
      <Title>{title}</Title>
    </Button>
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
