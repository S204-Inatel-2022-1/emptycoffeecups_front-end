import React from "react";
import { Routes ,Route } from "react-router-dom";

import Home from "../pages/Home"
import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import Indication from "../pages/Indication"
import Usuario from "../pages/Usuario"
import Erro from "../pages/Erro"

export default function Routers(){
    return(       
        <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/create" element={<CreateUser />} />
            <Route exact path="/home" element={<Home />} />            
            <Route exact path="/indication" element={<Indication />}/>
            <Route exact path="/usuario" element={<Usuario />} />
            <Route exact path="*" element={<Erro />}/>
        </Routes>       
    )
}