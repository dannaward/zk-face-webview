import { colors } from "@/constant/colors";
import { naviBarKey } from "@/types/naviBarKey";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { GrUserManager } from "react-icons/gr";

const Footer = () => {
  // TODO: wallet 값 불러오기
  const [naviBar, setNaviBar] = useState(naviBarKey.balance);
  return (
    <NaviBarContainer>
      <p>
        <GrUserManager />
      </p>
    </NaviBarContainer>
  );
};
export default Footer;

const NaviBarContainer = styled.footer`
  margin-top: 100%;
  // bottom: 0;
`;
