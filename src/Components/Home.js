import styled from "styled-components"
import Image from "../Images/UserImage.png"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";
import TasksWeek from "./TasksWeek";

export default function Home(){
    const percentage = 34;
    return (
        <Container>
            <Header>
                <h1>TrackIt</h1>
                <img src={Image} alt="User" />
            </Header>
            <SubHeader>
                <h2>Meus hábitos</h2>
                <PlusTask>
                    <div></div>
                    <div></div>
                </PlusTask>
            </SubHeader>
            <TaskCreator>
                <Input placeholder={"nome do hábito"}/>
                <div>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                </div>   
                <div>
                    <Button>Cancelar</Button>
                    <Button>Salvar</Button>
                </div>
            </TaskCreator>
            <TasksWeek/>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer>
                <Link style={{textDecoration: 'none'}} to={`/habitos`}><div>Hábitos</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/hoje'}><div><CircularProgressbar value={percentage} text={`Hoje`} background={true} styles={buildStyles({ strokeLinecap: 'round', textColor:'#FFFFFF', backgroundColor:'#52B6FF', trailColor: '#52B6FF', pathColor: '#FFFFFF'})}/></div></Link>
                <Link style={{textDecoration:'none'}} to={`/historico`}><div>Histórico</div></Link>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
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

    div:nth-child(2){
        width: 93%;
        display: flex;
        justify-content: start;
    }

    input{
        width: 90%;
    }

    div:nth-child(2) > div{
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

    div:last-child{
        width: 92%;
        display: flex;
        justify-content: end;
    }

    div:last-child button{
        width: 100px;
        height: 40px;
        margin: 20px 5px 0px 5px;
    }

    div:last-child button:first-child{
        background-color: #FFFFFF;
        color: #52B6FF;
    }
`