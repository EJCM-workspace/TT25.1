import styled from "styled-components/native";
import { globalStyle } from "../../GlobalStyle";

export const HooksView = styled.View `
    display: flex;
    flex: 1;
    align-items: center;
    background-color: ${globalStyle.colors.navyBlue};
`;

/*--------------------------------------------------------------*/

export const HooksMainView = styled.View `
    display: flex;
    flex: 0.7;
    align-items: center;
    justify-content: center;
`;

export const HooksCounterText = styled.Text `
    color: ${globalStyle.colors.white};
    font-size: 64;
`;

/*--------------------------------------------------------------*/

export const HooksButton = styled.Pressable `
    width: 80%;
    height: 5%;

    align-items: center;
    justify-content: center;
    margin: 3%;

    background-color: ${globalStyle.colors.yellow};
    border-radius: 5px;
`;

export const HooksButtonText = styled.Text `
    color: ${globalStyle.colors.white};
    font-size: 20px;
    padding: 10px;
`;