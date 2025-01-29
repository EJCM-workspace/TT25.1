import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import FriendRequestsNavigation from "./FriendRequestsNavigation";
import ChatNavigation from "./ChatNavigation";
import { Tab } from "../components/tab";

import { Home } from "../pages/home";
import { Notification } from "../pages/notification";

const Drawer = createDrawerNavigator();
const Stack =  createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Navigation () {
    return (
        <NavigationContainer>
            <Tabs.Navigator 
            initialRouteName='Home'
            tabBar={props => <Tab {...props}/>}
            screenOptions={{headerShown: false, tabBarStyle: { display: 'none' }}}>
                <Tabs.Screen name='Home' component={Home}/>
                <Tabs.Screen name='FriendRequestsNavigation' children={() => <FriendRequestsNavigation {...Drawer}/>}/>
                <Tabs.Screen name='ChatNavigation' children={() => <ChatNavigation {...Stack}/>}/>
                <Tabs.Screen name='Notification' component={Notification}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}
