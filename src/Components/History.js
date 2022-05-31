import styled from 'styled-components'
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import UserContext from '../Context/UserContext';
import Footer from './Footer';
import TasksContext from '../Context/TasksContext';
import Header from './Header';

export default function History(){
    const {user} = useContext(UserContext);
    const {percentage} = useContext(TasksContext)
    return (
        <Container>
            <Header src={user.image} name={user.name}/>
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
