import styled from 'styled-components/native'

type HasImageProps = {
    hasImage: boolean
}

export const Wrapper = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    
    padding: 2% 8%;
    height: 60px;
    width: 100%;
    
`

export const HeaderImage = styled.Image<HasImageProps>`
    height: 50;
    width: 50;
    border-radius: ${({hasImage}) => (hasImage ? "100px" : "0px")};
`