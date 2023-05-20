import { colors } from "@/constant/colors";
import { pageKey } from "@/types/pageKey";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  //   key: pageKey;
  key: string;
  title: string;
}

const CtaLargeBtn = (props: Props) => {
  const { title, key } = props;
  console.log("key", key);
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        // TODO: 얼굴인식 화면으로
        router.push(`/connect`);
      }}
    >
      <Title>{title}</Title>
    </Button>
  );
};

export default CtaLargeBtn;

const Button = styled.button`
  width: 223px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  background-color: ${colors.white};
  border-radius: 20px;
  border: none;
`;

const Title = styled.text`
  color: ${colors.deepBlue};
  font-size: 12px;
`;
