import { useState, useEffect, useContext } from "react"
import styled from 'styled-components'
import axios from "axios"
import 'react-circular-progressbar/dist/styles.css'
import TasksToday from './TasksToday'
import TasksContext from "../Context/TasksContext"
import UserContext from "../Context/UserContext"
import Footer from "./Footer"
import dayjs from "dayjs"

export default function Today(){
    const {user} = useContext(UserContext);
    const {arrayTasks, setArrayTasks, percentage, setPercentage, doneTasks, setDoneTasks, totalTasks, setTotalTasks} = useContext(TasksContext)
    const [toogle, setToogle] = useState(false)
    function getDay() {
        const daysWeek = [
          'Domingo',
          'Segunda',
          'Terça',
          'Quarta',
          'Quinta',
          'Sexta',
          'Sábado'
        ];
    
        return `${daysWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`;
      }

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });

        promise.then(response => {
            const { data } = response;
            setArrayTasks(data)
            setTotalTasks(data.length)
            const auxArr = data.filter((element) => element.done === true)
            setDoneTasks(auxArr.length)
            setPercentage(doneTasks/totalTasks * 100)
            setToogle(!toogle)
        });

        promise.catch(error => {console.log(error)});
            
    },[toogle])

    function taskDone(id, done){ 
        console.log(done)
        if(!done){
            
            const taskDonePromise = axios.post(`
            https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {} ,{headers: {
                Authorization: `Bearer ${user.token}`}
            })

            taskDonePromise.then(
                setDoneTasks(doneTasks + 1),
                setToogle(!toogle)
            )
            taskDonePromise.catch(error => {console.log(error.response.statusText)})
        }else{
            const taskUndonePromise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {} ,{headers: {
                Authorization: `Bearer ${user.token}`}
            })

            taskUndonePromise.then(setDoneTasks(doneTasks - 1),
            setToogle(!toogle))
            taskUndonePromise.catch(error => {console.log(error.response.statusText)})
        }
    }

    return(
        <Container>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="User" />
            </Header>
            <SubHeader>
                <h2>{getDay()}</h2>
                {arrayTasks.length !== 0 ?<p>{Math.floor(percentage)}% dos hábitos concluídos</p> : ""}
            </SubHeader>
            <Main>
                {arrayTasks.length === 0 ? <p>Você não tem hábito cadastrado para hoje.</p> : (arrayTasks.map(element => <TasksToday key={element.id} taskName={element.name} currentSequence={element.currentSequence} highestSequence={element.highestSequence} taskDone={element.done}taskMark={() => taskDone(element.id, element.done)}/>))}
            </Main>
            <Footer percentage={percentage}/>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100%;
    background: #E5E5E5;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;

    h1{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        width: 50px;
        height: 50px;
        background: url(image.png);
        border-radius: 100px;
        margin-right:10px;
    }
`

const SubHeader = styled.span`
    margin-top: 90px;
    margin-bottom: 30px; 
    padding: 0px 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    
    p{
        margin: 0px;
        color: #8FC549; 
    }
`

const Main = styled.div`
    width: 100%;
    margin-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
