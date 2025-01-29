import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SearchMessage, Wrapper } from "./styles";
import { Message } from "../../components/message";
import { Header } from "../../components/header";


export const Chat = () => {
    
    const navigation = useNavigation();

    return (
        <View style={{flex: 1}}>
            <Header urlImage={require('../../../assets/perfil_1.png')}/>
            <Wrapper>
                <SearchMessage>
                    <TextInput 
                    style={{fontFamily: 'Roboto-light', color: 'gray', fontSize: 18}}
                    placeholder={"Buscar Conversas"}/>
                    <Image style={{height: 24, width: 24}} 
                    source={require('../../../assets/icon_magnifier.svg')}/>
                </SearchMessage>

                <TouchableOpacity onPress={() => navigation.navigate('Message' as never)}>
                    <Message 
                    urlImage={require('../../../assets/vikings.png')}
                    titulo="Vikings - Brasil"
                    texto="Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompem os melhores"
                    messagesQuantity='1'
                    data={'20/10/2021'}/>
                </TouchableOpacity>

                <Message 
                urlImage={require('../../../assets/segredo.png')}
                titulo="O segredo além do Jardim"
                texto="George Washington: em um turbilhão, memórias a dançar, amáveis mentiras para contar"
                messagesQuantity='15'
                data={'20/10/2021'}/>

                <Message 
                urlImage={require('../../../assets/merigold.png')}
                titulo="Tris Merigold"
                texto="A urgência do problema justifica a ausência de decoro."
                messagesQuantity='3'
                data={'20/10/2021'}/>

                <Message 
                urlImage={require('../../../assets/miles.png')}
                titulo="Homem-aranha no Aranhaverso"
                texto="Miles Morales: Com grandes poderes vêm grandes prestações de contas."
                data={'20/10/2021'}/>
            </Wrapper>
        </View>
    )
}
