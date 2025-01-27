import { Image, ImageSourcePropType, Text, View } from "react-native"
import { Wrapper } from "./styles"

export type MessageProps = {
    urlImage: ImageSourcePropType,
    titulo: string,
    texto: string,
    messagesQuantity?: string,
    data: string
}

export const Message = (props: MessageProps) => {
    return (
        <Wrapper>
            <Image style={{height: 62, width: 62, borderRadius: 100}} source={props.urlImage}/>
            
            <View style={{width: '60%', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 18, fontWeight: 400}}>{props.titulo}</Text>
                <Text style={{color: 'gray', fontSize: 12}}>{props.texto}</Text>
            </View>

            <View style={{ height: '100%', alignItems:'flex-end', justifyContent: 'space-between'}}>
                {props.messagesQuantity ?
                <View style={{height: 20, width: 20, 
                alignItems: 'center', justifyContent:'center', 
                borderRadius: 50,
                marginTop: '10%',
                backgroundColor: '#007C82'}}>
                    <Text style={{fontSize: 12, color: 'white'}}>{props.messagesQuantity} </Text>
                </View>
                :
                <View/>
                }
                <Text style={{fontSize: 9}}>{props.data}</Text>
            </View>
        </Wrapper>
    )
}