import styled from "styled-components/native";
import { MaskedTextInput } from "react-native-mask-text";
import { globalStyle } from "../../GlobalStyle";

type inputTextProps = {
    error: boolean;
};

export const SignUpView = styled.View `
    display: flex;
    flex: 1;
    background-color: ${globalStyle.colors.white};
    justify-content: center;
`;

export const InputTextView = styled.View `
    width: 100%;
    height: 80%;

    align-items: center;
    justify-content: space-between;
`;

export const FormFieldView = styled.View<inputTextProps> `
    display: flex;
    width: 90%;
    height: 15%;

    justify-content: space-around;

    border-radius: 5px;
    border-width: ${props => props.error ? '2px' : '0'};
    border-color: ${props => props.error ? 'red' : 'black'};
`;

export const InputTextTitle = styled.Text<inputTextProps> ` 
    font-size: 18px; 
    font-weight: bold;
    color: ${props => props.error ? 'red' : 'black'};
`;

export const InputTextMaskedInput = styled(MaskedTextInput as any) `
    background-color: blue;
    border-radius: 5px;
    background-color: white;
    border: 1px solid #ccc;
`;

export const InputText = styled.TextInput `
    display: flex;
    height: 40%;
`;