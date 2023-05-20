import { colors } from "@/constant/colors";
import styled from "styled-components";

const Title = () => {
  const APP_TITLE = "BYOF";
  const APP_NAME = "Bring Your Own Face";
  return (
    <TitleContainer>
      <AppTitle>{APP_TITLE}</AppTitle>
      <br />
      <AppName>{APP_NAME}</AppName>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  height: 40%;
  text-align: center;
  padding: 20px;
`;

const AppTitle = styled.h1`
  color: ${colors.white};
  font-size: 50px;
  margin-bottom: 0;
  //   font-family:
`;

const AppName = styled.h2`
  margin-top: 0;
  color: ${colors.white};
  font-size: 25px;
  font-weight: normal;
`;
