import styled from 'styled-components'
import 'react-circular-progressbar/dist/styles.css';
import { useContext, useState } from 'react';
import UserContext from '../Context/UserContext';
import Footer from './Footer';
import TasksContext from '../Context/TasksContext';

export default function History(){
    const {user} = useContext(UserContext);
    const {percentage} = useContext(TasksContext)
    return (
        <Container>
            <Header>
                <h1>TrackIt</h1>
                <img src={user.image} alt="User" />
            </Header>
            <SubHeader>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </SubHeader>
            <Footer percentage={percentage}/>
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
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    
    p{
        margin: 20px 0px; 
    }
`
