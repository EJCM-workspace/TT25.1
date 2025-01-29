import { createDrawerNavigator } from "@react-navigation/drawer";
import { FriendRequests } from "../pages/friendRequests"

type FriendRequestsProps = {
    Navigator?: any,
    Screen?: any
}
const Drawer = createDrawerNavigator();

export default function FriendRequestsNavigation ({ Navigator, Screen }: FriendRequestsProps) {
    return (
        <Drawer.Navigator 
        initialRouteName='FriendRequests'>
            <Drawer.Screen name='FriendRequests' component={FriendRequests}/>
        </Drawer.Navigator>
    )
}
