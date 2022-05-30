import styled from "styled-components"

export default function Button(props){
    return <BUTTON type={props.type} onClick={props.onClick}>{props.children}</BUTTON> 
}

const BUTTON = styled.button`
    width: 310px;
    height: 45px;
    margin-bottom: 25px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
`