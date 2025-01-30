import { createContext, useState } from "react";
import { globalStyle } from "../GlobalStyle"

interface colorChangeHook {
    changeColor: () => void;
    buttonColor?: string;
    textColor?: string;
}

export const MeuContexto = createContext<colorChangeHook>({
    changeColor: () => {}
});

export default function NossoHookProvider({ children }: { children: any}) {
    const [buttonColor, setButtonColor] = useState('');
    const [textColor, setTextColor] = useState('');

    const colorArray = Object.values(globalStyle.colors);

    function changeColor() {
        setButtonColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
        setTextColor(colorArray[Math.floor(Math.random() * colorArray.length)]);
    }

    return (
        <MeuContexto.Provider
            value={{
                changeColor: changeColor,
                buttonColor: buttonColor,
                textColor: textColor
            }}
        >
            {children}
        </MeuContexto.Provider>
    );
}