import { colors } from "@/constant/colors";
import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  // TODO: wallet 값 불러오기
  const [walletAddress, setWalletAddress] = useState("wallet1 (0x1287...dfd)");
  return (
    <HeaderContainer>
      <AddressTitle>{walletAddress}</AddressTitle>
    </HeaderContainer>
  );
};
export default Header;

const AddressTitle = styled.text`
  // flex: 1;
  font-size: 30px;
  color: ${colors.white};
`;

const HeaderContainer = styled.div`
  padding-top: 30px;
`;
