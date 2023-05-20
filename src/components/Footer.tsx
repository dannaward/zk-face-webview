import { colors } from "@/constant/colors";
import { naviBarKey } from "@/types/naviBarKey";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import balanceIcon from "../../public/svgs/Balance.svg";
import profileIcon from "../../public/svgs/Profile.svg";

const Footer = () => {
  // TODO: wallet 값 불러오기
  const [naviBar, setNaviBar] = useState(naviBarKey.balance);
  return (
    <NaviBarContainer>
      <Image
        src={balanceIcon}
        alt="Check Your Balance"
        style={{ alignSelf: "flexEnd" }}
      />
      <Image
        src={profileIcon}
        alt="Check Your Profile"
        style={{ alignSelf: "flexEnd" }}
      />
    </NaviBarContainer>
  );
};
export default Footer;

const NaviBarContainer = styled.footer`
  justify-content: flex-end;
`;
