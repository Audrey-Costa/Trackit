import styled from "styled-components"

export default function TasksWeek(){
    return (
        <Container>
            <div><h3>Ler 1 capítulo de livro</h3></div>
            <ion-icon name="trash-outline"></ion-icon>
            <div>
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 90%;
    height: 90px;
    margin-bottom: 20px;
    padding-left: 20px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    div:first-child{
        width: 65%;
        margin-bottom: 10px;
    }

    ion-icon{
        position: absolute;
        top: 0px;
        right: 0px;
        margin: 10px;
    }

    div:last-child{
        width: 93%;
        display: flex;
        justify-content: start;
    }

    div:last-child > div{
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
`