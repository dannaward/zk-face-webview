import React from 'react';
import styled from "styled-components";
import { colors } from "@/constant/colors";

interface AppProps {
  name: string;
}

function ZkApp({ name }: AppProps) {
  return (
    <Wrap>
      <AppTitle>{name}</AppTitle>
    </Wrap>
  );
}

export default ZkApp;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${colors.deepBlue};
  
  height: 130px;
  border-radius: 30px;
`;

const AppTitle = styled.text`
  font-size: 27px;
  color: ${colors.white};
  white-space: pre-wrap;
`;
