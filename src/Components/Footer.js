import styled from "styled-components"
import { Link } from "react-router-dom"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

export default function Footer({percentage}){
    return (
        <FooterProgress>
                <Link style={{textDecoration: 'none'}} to={`/habitos`}><div>Hábitos</div></Link>
                <Link style={{textDecoration: 'none'}} to={'/hoje'}><div><CircularProgressbar value={Math.floor(percentage)} text={Math.floor(percentage)} background={true} backgroundPadding={6} styles={buildStyles({ strokeLinecap: 'round', textColor:'#FFFFFF', backgroundColor:'#52B6FF', trailColor: '#52B6FF', pathColor: '#FFFFFF'})}/></div></Link>
                <Link style={{textDecoration:'none'}} to={`/historico`}><div>Histórico</div></Link>
        </FooterProgress>
    )
}

const FooterProgress = styled.div`
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
