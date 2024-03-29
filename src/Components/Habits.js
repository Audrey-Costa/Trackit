import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css'
import axios from "axios"
import Input from "./Input";
import Button from "./Button";
import TasksWeek from "./TasksWeek";
import UserContext from "../Context/UserContext"
import TasksContext from "../Context/TasksContext"
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader"

export default function Habits(){
    const {user} = useContext(UserContext);
    const {arrayTasks, setArrayTasks, percentage, setPercentage, totalTasks, setTotalTasks, doneTasks, setDoneTasks} = useContext(TasksContext)
    const [creatTask, setCreatTask] = useState(false)
    const [taskFormData, setTaskFormData] = useState({
        name: '',
        days: []
    })
    const [toogle, setToogle] = useState(false)
    const [ready, setReady] = useState(false)

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });

        promise.then(response => {
            const { data } = response;
            setArrayTasks(data)
            setPercentage(doneTasks/totalTasks * 100)
            setTimeout(() => setReady(true), 200)
        });
        promise.catch(error => {alert(error.response.statusText)});
            
    },[toogle])

    function taskCreator(){
        setCreatTask(!creatTask)
    }

    function taskSaver(e){
        e.preventDefault();
        const taskPromise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {...taskFormData}, {headers: {
            Authorization: `Bearer ${user.token}`
        }})

        taskPromise.then(response => {
            setCreatTask(!creatTask)
            setTotalTasks(totalTasks + 1)
            setToogle(!toogle)
        })

        taskPromise.catch(error => console.log(error.response.statusText))
    }

    function taskDelete(taskId, taskDone){
        if(taskDone){
            setDoneTasks(doneTasks - 1)
        }
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${taskId}`, {headers: {
            Authorization: `Bearer ${user.token}`}
        }
        )

        promise.then((response)=>{
            setToogle(!toogle)
            setTotalTasks(totalTasks - 1)}
        )
    }

    function inputChange(e){
        e.preventDefault();
        setTaskFormData({...taskFormData, name: e.target.value});
    }

    function dayTask(e){
        e.preventDefault();
        const auxArr = [...taskFormData.days]
        if(!taskFormData.days.includes(e.target.value)){
            setTaskFormData({...taskFormData, days: [...taskFormData.days, e.target.value]})
        }else{
            const index = auxArr.indexOf(e.target.value);
            auxArr.splice(index, 1);
            setTaskFormData({...taskFormData, days: auxArr})
        }
    }

    return (
        <Container>
            <Header src={user.image} name={user.name}/>
            <SubHeader>
                <h2>Meus hábitos</h2>
                {creatTask ? "" : <PlusTask onClick={taskCreator}>
                    <div></div>
                    <div></div>
                </PlusTask>}
            </SubHeader>
            <Main>
                {creatTask ? <TaskCreator>
                    <form onSubmit={taskSaver}>
                        <Input formData={taskFormData.name} inputName={"nameTask"} inputChange={inputChange} placeholder={"nome do hábito"}/>
                        <div>
                            <button value={0} style={taskFormData.days.includes('0') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>D</button>
                            <button value={1} style={taskFormData.days.includes('1') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>S</button>
                            <button value={2} style={taskFormData.days.includes('2') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>T</button>
                            <button value={3} style={taskFormData.days.includes('3') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>Q</button>
                            <button value={4} style={taskFormData.days.includes('4') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>Q</button>
                            <button value={5} style={taskFormData.days.includes('5') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>S</button>
                            <button value={6} style={taskFormData.days.includes('6') ? {backgroundColor: '#D5D5D5', color: '#FFFFFF'} : {backgroundColor: '#FFFFFF', color: '#D5D5D5'}} onClick={dayTask}>S</button>
                        </div>   
                        <div>
                            <Button onClick={taskCreator}>Cancelar</Button>
                            <Button type={'submit'}>Salvar</Button>
                        </div>
                    </form>
                </TaskCreator> : ""}
                {!ready ? <Loader/> : arrayTasks.length !== 0 ? (arrayTasks.map(element => <TasksWeek style={ready ? {display: 'inherit'} : {display: 'none'}} key={element.id} taskName={element.name} days={element.days} taskDelete={() => taskDelete(element.id, element.done)} taskId={element.id}/>)):
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
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

const SubHeader = styled.span`
    margin-top: 90px;
    margin-bottom: 45px; 
    padding: 0px 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

const PlusTask = styled.div`
    position: relative;
    width: 40px;
    height: 36px;
    background: #52B6FF;
    border-radius: 5px;
    div:nth-child(1){
        position: absolute;
        width: 16px;
        height: 4px;
        top: 16px;
        left: 12px;
        background: #FFFFFF;
    }
    div:nth-child(2){
        position: absolute;
        width: 4px;
        height: 16px;
        top: 10px;
        left: 18px;
        background: #FFFFFF;
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

const TaskCreator = styled.div`
    width: 90%;
    height: 180px;
    margin-bottom: 20px;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        width: 100%;
        height: 180px;
        margin-bottom: 20px;
        background-color: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form div:nth-child(2){
        width: 93%;
        display: flex;
        justify-content: start;
    }

    input{
        width: 90%;
    }

    form div:nth-child(2) > button{
        width: 30px;
        height: 30px;
        margin-right: 2%;
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

    form div:last-child{
        width: 92%;
        display: flex;
        justify-content: end;
    }

    form div:last-child button{
        width: 100px;
        height: 40px;
        margin: 20px 5px 0px 5px;
    }

    form div:last-child button:first-child{
        background-color: #FFFFFF;
        color: #52B6FF;
    }
`