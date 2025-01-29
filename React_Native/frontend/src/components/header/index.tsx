import { ImageSourcePropType, TouchableOpacity, View } from "react-native"
import { HeaderImage, Wrapper } from "./styles"

export type HeaderProps = {
    urlImage?: ImageSourcePropType
}


export const Header = (props: HeaderProps) => {
    return (
        <Wrapper style={{borderColor: 'black'}}>
            {props.urlImage ? 
            <HeaderImage hasImage style={{height: 40, width: 40}} source={props.urlImage}/>
            :
            <HeaderImage style={{height: 40, width: 40}} source={require('../../../assets/icon_profile.svg')}/>
            }
            <HeaderImage style={{height: 50, width: 50}} source={require('../../../assets/logo_img.svg')}/>
            <HeaderImage style={{height: 40, width: 40}} source={require('../../../assets/icon_magnifier.svg')}/>
        </Wrapper>
    )
}