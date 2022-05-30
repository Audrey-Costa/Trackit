import styled from "styled-components"
import { useContext } from "react"
import UserContext from "../Context/UserContext"
import Day from "./Day"

export default function TasksWeek({taskName, days, taskDelete, taskId}){
    console.log(days, taskId, taskName)
    const week = ['D','S','T','Q','Q','S','S']
    return (
        <Container>
            <div><h3>{taskName}</h3></div>
            <ion-icon name="trash-outline" onClick={taskDelete}></ion-icon>
            <div>
                {days ? week.map((element)=><Day key={element.index} index={element.index} days={days}>{element}</Day>) : ""}
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 90%;
    height: 90px;
    margin-bottom: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    background-color: ${'#FFFFFF'};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    div:first-child{
        width: 65%;
        margin-bottom: 10px;
    }

    ion-icon{
        position: absolute;
        top: 0px;
        right: 0px;
        margin: 10px;
        font-size: 25px;
    }

    div:last-child{
        width: 93%;
        display: flex;
        justify-content: start;
    }

    div:last-child > button{
        width: 30px;
        height: 30px;
        margin-right: 2%;
        background: #FFFFFF;
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
        color: #DBDBDB;
    }
`