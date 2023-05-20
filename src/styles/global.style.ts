import { colors } from "@/constant/colors";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html,
    body{
        background-color: ${colors.black};
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;
