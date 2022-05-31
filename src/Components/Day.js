import styled from 'styled-components'
import Button from './Button'

export default function Day(props){
    return (
        <ButtonDay><button value={props.index} style={props.days.includes(props.index) ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}}>{props.children}</button></ButtonDay>
    )
}

const ButtonDay = styled.div`
    width: 30px;
    margin-right: 10px;
    button{
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
`