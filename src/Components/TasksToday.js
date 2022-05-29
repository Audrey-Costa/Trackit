import styled from "styled-components"

export default function TasksToday(){
    return (
        <Container>
            <div>
                <h2>Ler 1 Capítulo de livro</h2>
                <h3>Sequência atual: <strong>4 dias</strong></h3>
                <h3>Seu recorde: <strong>5 dias</strong></h3>
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 90%;
    height: 90px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div:first-child h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    div:first-child h3{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 25px;
        color: #666666;
    }

    div:first-child strong:first-child{
        color: #8FC549;
    }

    div:last-child{
        position: relative;
        width: 70px;
        height: 70px;
        border-radius: 5px;
        background-color: #8FC549;
    }

    div:last-child div:first-child{
        position: absolute;
        width: 30px;
        height: 10px;
        top: 35px;
        left: 6px;
        background-color: #FFFFFF;
        border-radius: 5px;
        rotate: 45deg;
    }

    div:last-child div:last-child{
        position: absolute;
        width: 50px;
        height: 10px;
        top: 30px;
        left: 20px;
        background-color: #FFFFFF;
        rotate: -45deg;
    }
`