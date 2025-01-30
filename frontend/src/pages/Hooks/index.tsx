import { useContext, useEffect, useState } from "react";
import { HooksButton, HooksButtonText, HooksCounterText, HooksMainView, HooksView } from "./style";
import { MeuContexto } from "../../context/colorContext";

export default function Hooks() {
    const [counter, setCounter] = useState(0);
    const { changeColor, buttonColor, textColor } = useContext(MeuContexto);
    /*
        useState:
        [
            1- Variável: Armazena o valor do estado
            2- Função: Atualiza o valor do estado
        ]
    */

    useEffect(() => {
        changeColor();
    }, [counter])

    return (
        <HooksView style={{backgroundColor: buttonColor}}>
            <HooksMainView>
                <HooksCounterText style={{fontSize: 32, color: textColor}}>
                    Você apertou o botão
                </HooksCounterText>

                <HooksCounterText style={{color: textColor}}>
                    {counter}
                </HooksCounterText>

                <HooksCounterText style={{fontSize: 32, color: textColor}}>
                    VEZES
                </HooksCounterText>
            </HooksMainView>

            <HooksButton style={{backgroundColor: buttonColor}} onPress={() => setCounter(counter + 1)}>
                <HooksButtonText>Aperte para trocar de cor</HooksButtonText>
            </HooksButton>

            <HooksButton style={{backgroundColor: buttonColor}} onPress={() => setCounter(counter + 1)}>
                <HooksButtonText>Aperte para resetar</HooksButtonText>
            </HooksButton>
        </HooksView>
    );

}