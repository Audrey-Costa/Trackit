import { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

export default function Header({src, name}){
    const [open, setOpen] = useState(false)
    function oper(){
        setOpen(true)
    }

    function closer(){
        setOpen(false)
    }

    return (
        <>
            <TopBar>
                <h1>TrackIt</h1>
                <img src={src} alt="User" onClick={oper}/>
            </TopBar>
            <SideBar style={open ? {right: '0px'} : {right: '-300px', display: 'none'}}>
                <img src={src} alt="User"/>
                <p>{name}</p>
                <ion-icon name="close-circle-outline" onClick={closer}></ion-icon>
                <Link style={{textDecoration: 'none'}} to={`/`}><ion-icon name="exit-outline"></ion-icon></Link>
            </SideBar>
        </>
    )
}

const TopBar = styled.div`
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
        border-radius: 100px;
        margin-right:10px;
    }
`

const SideBar = styled.div`
    position: absolute;
    top: 80px;
    background-color: #FFFFFF;
    width: 300px;
    height: 80px;
    margin-top: 0px;
    border-radius: 10px 0px 0px 10px;
    z-index: 2;

    img{
        position: absolute;
        top: 15px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        margin-right:10px;
    }

    > :nth-child(2){
        position: absolute;
        top: 25px;
        left: 60px;
        font-size: 30px;
    }
    
    > :nth-child(3){
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 35px;
    }

    > :nth-child(4){
        position: absolute;
        bottom: 20px;
        right: 65px;
        font-size: 35px;
    }
`