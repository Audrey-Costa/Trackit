import styled from "styled-components"

export default function Input({formData, inputChange, inputName, placeholder}){
    return <INPUT type={'text'} value={formData} onChange={inputChange} name={inputName} placeholder={placeholder}required></INPUT>
}

const INPUT = styled.input`
        width: 300px;
        height: 45px;
        margin-bottom: 6px;
        background: #FFFFFF;
        padding-left: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
`