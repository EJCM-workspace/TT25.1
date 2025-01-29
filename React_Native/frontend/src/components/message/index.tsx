import { Image, ImageSourcePropType, Text, View } from "react-native"
import { ContentView, MessagesQuantitiesView, Wrapper } from "./styles"


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
            
            <ContentView>
                <Text numberOfLines={1} ellipsizeMode="tail" style={{fontSize: 18}}>{props.titulo}</Text>
                <Text numberOfLines={2} ellipsizeMode="tail" style={{color: 'gray', fontSize: 12}}>{props.texto}</Text>
            </ContentView>

            <View style={{ height: '100%', alignItems:'flex-end', justifyContent: 'space-between'}}>
                {props.messagesQuantity ?
                <MessagesQuantitiesView>
                    <Text style={{fontSize: 12, color: 'white'}}>{props.messagesQuantity} </Text>
                </MessagesQuantitiesView>
                :
                <View/>
                }
                <Text style={{fontSize: 9}}>{props.data}</Text>
            </View>
        </Wrapper>
    )
}