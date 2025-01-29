import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Tela1 } from "../pages/Tela1";
import { Tela2 } from "../pages/Tela2";
import { Tela3 } from "../pages/Tela3";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <Tela1/> } path="/Tela1"/>
                <Route element={ <Tela2/> } path="/Tela2"/>
                <Route element={ <Tela3/> } path="/Tela3"/>
                <Route element={ <Tela3/> } path="/Tela8"/>
                

                <Route element={ <Tela1/> } path="*"/>
            </Routes>
        </BrowserRouter>
    )
}