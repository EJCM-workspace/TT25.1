import { Chat } from "../pages/chat";
import { Message } from "../pages/message";

type ChatNavigationProps = {
    Navigator: any,
    Screen: any
}

export default function ChatNavigation ({ Navigator, Screen }: ChatNavigationProps) {
    return (
        <Navigator 
        initialRouteName='Chat'
        screenOptions={{headerShown: false}}>
            <Screen name='Chat' component={Chat}/>
            <Screen name='Message' component={Message}/>
        </Navigator>
    )
}
