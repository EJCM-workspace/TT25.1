import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{flex: 1}}>
                <Navigation/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
