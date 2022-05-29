import { Link } from "react-router-dom"
import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Logo from "../Images/Logo.png"

export default function Login(){
    return (
        <>
            <IMG src={Logo} alt="Logo Trackit" />
            <Input placeholder={"email"}/>
            <Input placeholder={"senha"}/>
            <Link to={`/habitos`}><Button>Entrar</Button></Link>
            <Link style={{textDecoration: "none", color: "#52B6FF"}} to={`/cadastro`}><h1>Não tem uma conta? Cadastre-se!</h1></Link>
        </>
    )
}

const IMG = styled.img`
    margin-top: 68px;
    margin-bottom: 32px;
`