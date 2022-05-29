import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "../Images/Logo.png"
import Button from "./Button"
import Input from "./Input"

export default function Register(){
    return (
        <>
            <IMG src={Logo} alt="Logo Trackit" />
            <Input placeholder={"email"}/>
            <Input placeholder={"senha"}/>
            <Input placeholder={"nome"}/>
            <Input placeholder={"foto"}/>
            <Link to={`/`}><Button>Cadastrar</Button></Link>
            <Link style={{textDecoration: "none", color: "#52B6FF"}} to={"/"}><h1>Já tem uma conta? Faça login!</h1></Link>
        </>
    )
}

const IMG = styled.img`
    margin-top: 68px;
    margin-bottom: 32px;
`