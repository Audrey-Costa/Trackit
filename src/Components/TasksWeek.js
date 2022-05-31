import styled from "styled-components"
import Day from "./Day"

export default function TasksWeek({taskName, days, taskDelete, style}){
    const week = ['D','S','T','Q','Q','S','S']
    return (
        <Container style={style}>
            <div><h3>{taskName}</h3></div>
            <ion-icon name="trash-outline" onClick={taskDelete}></ion-icon>
            <div>
                {days ? week.map((element, index)=><Day key={index} index={index} days={days}>{element}</Day>) : ""}
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

    > div:first-child{
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
`