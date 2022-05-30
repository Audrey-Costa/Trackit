import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import styled from "styled-components"
import Button from "./Button"
import Input from "./Input"
import Logo from "../Images/Logo.png"
import axios from "axios"
import UserContext from "../Context/UserContext"

export default function Login(){
    const {setUser} = useContext(UserContext)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    function login(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {...formData});

        promise.then(response => {console.log(response.data);
        navigate('/habitos');
        setUser(response.data);
        });
        promise.catch(error=> {console.log(error.response);
        alert("Email ou senha incorretos!");
        });
    }

    function inputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    return (
        <>
            <IMG src={Logo} alt="Logo Trackit" />
            <form onSubmit={login}>
                <Input formData={formData.email} inputName={"email"} inputChange={inputChange} placeholder={"email"}/>
                <Input formData={formData.password} inputName={"password"} inputChange={inputChange} placeholder={"senha"}/>
                <Button>Entrar</Button>
            </form>
            <Link style={{textDecoration: "none", color: "#52B6FF"}} to={`/cadastro`}><h1>Não tem uma conta? Cadastre-se!</h1></Link>
        </>
    )
}

const IMG = styled.img`
    margin-top: 68px;
    margin-bottom: 32px;
`