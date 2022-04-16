import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Main from "./pages/Main"
import Indication from "./pages/Indication"
import Erro from "./pages/Erro"

export default function Routers(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />}/>
                <Route exact path="/indication" element={<Indication />}/>
                <Route exact path="*" element={<Erro />}/>
            </Routes>
        </BrowserRouter>
    )
}