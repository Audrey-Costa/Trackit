import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import axios from "axios"
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import TasksWeek from "./TasksWeek";
import UserContext from "../Context/UserContext"
import TasksContext from "../Context/TasksContext"

export default function Habits(){
    const {user} = useContext(UserContext);
    const {arrayTasks, setArrayTasks} = useContext(TasksContext)
    const [creatTask, setCreatTask] = useState(false)
    const [taskFormData, setTaskFormData] = useState({
        name: '',
        days: []
    })  

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        });

        promise.then(response => {
            const { data } = response;
            setArrayTasks(data)
        });

        promise.catch(error => {alert(error.response.statusText)});
            
    },[taskSaver, taskDelete])

    function taskCreator(){
        setCreatTask(!creatTask)
    }

    function taskSaver(e){
        e.preventDefault();
        console.log(taskFormData)
        const taskPromise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {...taskFormData}, {headers: {
            Authorization: `Bearer ${user.token}`
        }})

        taskPromise.then(response => {
            console.log(response.data)
            setCreatTask(!creatTask)
        })

        taskPromise.catch(error => console.log(error.response.statusText))
    }

    function taskDelete(taskId){
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${taskId}`, {headers: {
            Authorization: `Bearer ${user.token}`}
        }
        )
    }

    function inputChange(e){
        setTaskFormData({...taskFormData, name: e.target.value});
    }

    function dayTask(e){
        e.preventDefault();
        if(!taskFormData.days.includes(e.target.value)){
            setTaskFormData({...taskFormData, days: [...taskFormData.days, e.target.value]})
        }else{
            const auxArr = [...taskFormData.days]
            const index = auxArr.indexOf(e.target.value);
            auxArr.splice(index, 1);
            setTaskFormData({...taskFormData, days: auxArr})
        }
        console.log(e.target.value, taskFormData.days)
    }

    const percentage = 34;
    return (
        <Container>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="User" />
            </Header>
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
                            <button value={0} onClick={dayTask}>D</button>
                            <button value={1} onClick={dayTask}>S</button>
                            <button value={2} onClick={dayTask}>T</button>
                            <button value={3} onClick={dayTask}>Q</button>
                            <button value={4} onClick={dayTask}>Q</button>
                            <button value={5} onClick={dayTask}>S</button>
                            <button value={6} onClick={dayTask}>S</button>
                        </div>   
                        <div>
                            <Button onClick={taskCreator}>Cancelar</Button>
                            <Button type={'submit'}>Salvar</Button>
                        </div>
                    </form>
                </TaskCreator> : ""}
                {arrayTasks.length !== 0 ? (arrayTasks.map(element => <TasksWeek key={element.id} taskName={element.name} days={element.days} taskDelete={() => taskDelete(element.id)} taskId={element.id}/>)):
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
            </Main>
            <Footer>
                <Link style={{textDecoration: 'none'}} to={`/habitos`}><div>Hábitos</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/hoje'}><div><CircularProgressbar value={percentage} text={`Hoje`} background={true} backgroundPadding={6} styles={buildStyles({ strokeLinecap: 'round', textColor:'#FFFFFF', backgroundColor:'#52B6FF', trailColor: '#52B6FF', pathColor: '#FFFFFF'})}/></div></Link>
                <Link style={{textDecoration:'none'}} to={`/historico`}><div>Histórico</div></Link>
            </Footer>
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

const Footer = styled.div`
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div:nth-child(2n+1){
        width: 80px;
        height: 40px;
        margin: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    div:nth-child(2){
        position: fixed;
        width: 90px;
        height: 90px;
        bottom: 0px;
        left: calc(50% - 45px);
    }
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
        background: ${false? '#D5D5D5' :'#FFFFFF'};
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