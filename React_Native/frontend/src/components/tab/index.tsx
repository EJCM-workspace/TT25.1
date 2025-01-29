import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useNavigationState } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { TabImage, Wrapper } from "./styles"


export const Tab = (props: BottomTabBarProps) => {

    const navigationState = useNavigationState((state) => state);

    return (
        <Wrapper>
            <TouchableOpacity onPress={() => props.navigation.navigate('Home' as never)}>
                <TabImage style={{ height: 30 }} source={
                (navigationState?.index == 0 || navigationState == undefined)
                ? require('../../../assets/icon_home_active.svg') 
                : require('../../../assets/icon_home.svg')}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('FriendRequestsNavigation' as never)}>
                <TabImage style={{width: 32}} source={           
                navigationState?.index == 1
                ? require('../../../assets/icon_add_active.svg') 
                : require('../../../assets/icon_add.svg')}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('ChatNavigation' as never)}>
                <TabImage style={{height: 26, width: 26}} source={                
                navigationState?.index == 2
                ? require('../../../assets/icon_messages_active.svg') 
                : require('../../../assets/icon_messages.svg')}/> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('Notification' as never)}>
                <TabImage style={{height: 30}} source={                
                navigationState?.index == 3
                ? require('../../../assets/icon_notification_active.svg') 
                : require('../../../assets/icon_notification.svg')}/>
            </TouchableOpacity>
        </Wrapper>
    )
}
