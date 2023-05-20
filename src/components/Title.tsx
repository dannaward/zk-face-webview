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

const AppTitle = styled.text`
  color: ${colors.white};
  font-size: 50px;
  //   font-family:
`;

const AppName = styled.text`
  margin-top: 30px;
  color: ${colors.white};
  font-size: 30px;
  //   font-family:
`;
