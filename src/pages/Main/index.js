import React from "react";
import { Link } from "react-router-dom";

import{Container, Container2, Title, SubmitButton} from "./styles"

export default function Main(){
    return(
        <div>
            <Container>
                <h2>Bem-vindo(a) ao</h2>
                <Title>GiftTips</Title>                
            </Container>
            <div>
                <Container2>
                    <h2>Quero uma indicação</h2>
                    <SubmitButton>
                        <Link to="/indication">Indicação</Link>
                    </SubmitButton>
                </Container2>
                <Container2>
                    <h2>Login</h2>
                    <SubmitButton>
                        <h5>Login</h5>
                    </SubmitButton>
                </Container2>               
            </div>
        </div>
    )
}