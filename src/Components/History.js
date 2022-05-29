import styled from 'styled-components'
import Image from '../Images/UserImage.png'
import { Link } from 'react-router-dom'
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

export default function History(){
    const percentage = 42;
    return (
        <Container>
            <Header>
                <h1>TrackIt</h1>
                <img src={Image} alt="User" />
            </Header>
            <SubHeader>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </SubHeader>
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
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    
    p{
        margin: 20px 0px; 
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
