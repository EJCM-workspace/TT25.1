import { TabImage, Wrapper } from "./styles"


export const Tab = () => {
    return (
        <Wrapper>
            <TabImage source={require('../../../assets/icon_home.svg')}/>
            <TabImage source={require('../../../assets/icon_add.svg')}/>
            <TabImage source={require('../../../assets/icon_messages.svg')}/>
            <TabImage source={require('../../../assets/icon_notification.svg')}/>
        </Wrapper>
    )
}
