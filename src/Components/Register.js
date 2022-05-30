import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Logo from "../Images/Logo.png"
import Button from "./Button"
import Input from "./Input"
import axios from "axios"

export default function Register(){
    const [formData, setFormData] = useState(
        {
            email: '',
            password: '',
            image: '',
            name: ''
        }
    )
    
    const navigate = useNavigate();
    function register(e){
        e.preventDefault();
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {...formData})


        promise.then(response => console.log(response));
        promise.catch(error => console.log(error.response))

        navigate('/')
    }

    function inputChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    

    return (
        <>
            <IMG src={Logo} alt="Logo Trackit" />
            <form onSubmit={register}>
                <Input formData={formData.email} inputChange={inputChange} inputName={"email"} placeholder={"email"}/>
                <Input formData={formData.password} inputChange={inputChange} inputName={"password"} placeholder={"senha"}/>
                <Input formData={formData.name} inputChange={inputChange} inputName={"name"} placeholder={"nome"}/>
                <Input formData={formData.image} inputChange={inputChange} inputName={"image"}  placeholder={"foto"}/>
                <Button type={'submit'}>Cadastrar</Button>
            </form> 
            <Link style={{textDecoration: "none", color: "#52B6FF"}} to={"/"}><h1>Já tem uma conta? Faça login!</h1></Link>
        </>
    )
}

const IMG = styled.img`
    margin-top: 68px;
    margin-bottom: 32px;
`