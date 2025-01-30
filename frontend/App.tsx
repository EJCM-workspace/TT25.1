import NossoHookProvider from "./src/context/colorContext";
import Hooks from "./src/pages/Hooks";

export default function App() {
    return (
        <NossoHookProvider>
            <Hooks/>
        </NossoHookProvider>
    );
}