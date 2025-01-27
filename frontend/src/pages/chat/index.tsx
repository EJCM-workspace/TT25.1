import { Image, TextInput, View } from "react-native"
import { Header } from "../../components/header"
import { Tab } from "../../components/tab"
import { SearchMessage, Wrapper } from "./styles"
import { Message } from "../../components/message"

export const Chat = () => {
    return (
        <View style={{flex: 1}}>
            <Header urlImage={require('../../../assets/perfil_1.png')}/>
            <Wrapper>
                <SearchMessage>
                    <TextInput style={{ fontFamily: 'Roboto-light', 
                    outlineStyle: 'none', 
                    color: 'gray',
                    fontSize: 18, 
                    fontWeight: 100}}
                    placeholder={"Buscar Conversas"}/>
                    <Image style={{height: 24, width: 24}} 
                    source={require('../../../assets/icon_magnifier.svg')}/>
                </SearchMessage>

                <Message 
                urlImage={require('../../../assets/vikings.png')}
                titulo="Vikings - Brasil"
                texto="Ragnar Lothbrok: O poder é sempre perigoso. Ele atrai o pior e corrompe ..."
                messagesQuantity='1'
                data={'20/10/2021'}/>

                <Message 
                urlImage={require('../../../assets/segredo.png')}
                titulo="O segredo além do jardim"
                texto="George Washington: em um turbilhão, memórias a dançar, amáveis mentiras..."
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
                titulo="Homem-aranha no aranha..."
                texto="Miles Morales: Com grandes poderes vêm grandes prestações de contas."
                data={'20/10/2021'}/>
            </Wrapper>
            <Tab/>
        </View>
    )
}
