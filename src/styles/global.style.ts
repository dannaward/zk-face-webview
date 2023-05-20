import { colors } from "@/constant/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body{
        backgroundColor: ${colors.black};
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
`;
