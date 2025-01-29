import styled from 'styled-components/native'

export const Wrapper = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    background-color: white;
    border-radius: 5px;
    padding: 1% 2%;
    height: 80px;
    width: 100%;
`

export const TabImage = styled.Image`
    height: 25px;
    width: 25px;
`

export const ContentView = styled.View`
    width: 60%;
    gap: 5px;
`

export const MessagesQuantitiesView = styled.View`
    background-color: #007C82;
    border-radius: 50px;

    margin-top: 10%;
    height: 20px;
    width: 20px; 

    align-items: center; 
    justify-content: center;
`