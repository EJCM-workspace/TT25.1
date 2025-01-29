import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    height: 100%;
    background-color: darkblue;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center; 

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const Button = styled.button `
    border: none;
    border-radius: 5px;
    width: 200px;
    cursor: pointer;
`;