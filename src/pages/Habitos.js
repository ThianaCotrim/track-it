import styled from "styled-components"
import trackit from "../images/trackit.png"
import perfil from "../images/perfil.png"
import bolinha from "../images/bolinha.png"
import lixeirinha from "../images/lixeirinha.png"
import { Link } from "react-router-dom"

export default function Habitos () {
    return (
        <Container>

       <ContainerTopo>
        <NavBar>
            <Link to="/">
            <img src={trackit} alt={trackit}/>
            </Link>
            
            <img src={perfil} alt={perfil}/>
        </NavBar>
       </ContainerTopo>
       
        <Principal>
        < Cima>
        <Meus>
        Meus Hábitos
        </Meus>
            <Quadrado>
                <p>+</p>
            </Quadrado>
        </Cima>
        <Informacoes>
            < Nome>
                 <input type="text" placeholder="nome do hábito"/>
            </Nome>
            <Dias>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Dias>
            <CancelarESalvar>
                <Cancelar>
                    Cancelar
                </Cancelar>
                <Salvar>
                    <p>Salvar</p>
                </Salvar>
            </CancelarESalvar>
        </Informacoes>
        <Tarefas>
        <Tarefa>
        <p>
            Ler 1 capítulo de um livro
        </p>
        <Dias>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Dias>
        </Tarefa>
        <img src={lixeirinha} alt={lixeirinha}/>
        </Tarefas>

        <Tarefas>
        <Tarefa>
        <p>
            Ler 1 capítulo de um livro
        </p>
        <Dias>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Dias>
        </Tarefa>
        <img src={lixeirinha} alt={lixeirinha}/>
        </Tarefas>

        <Tarefas>
        <Tarefa>
        <p>
            Ler 1 capítulo de um livro
        </p>
        <Dias>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </Dias>
        </Tarefa>
        <img src={lixeirinha} alt={lixeirinha}/>
        </Tarefas>

        <Texto>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Texto>
       </Principal>

       <ContainerLow>
        <Low>
            <Link to="/habitos" style={{ textDecoration: 'none' }}>
            <Habits>
                Hábitos
            </Habits>
            </Link>
           <Link to="/hoje">
           <Div>
            <img src={bolinha} alt={bolinha}/>
            <Day>Hoje</Day>
            </Div>
           </Link>
            <Link to="/historico" style={{ textDecoration: 'none' }}>
            <Historic>
                Histórico
            </Historic>
            </Link>
        </Low>
       </ContainerLow> 
       </Container>

    )
}

const ContainerTopo = styled.div`
    width:100vw;
    margin:0;
    background-color: #126BA5;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NavBar = styled.div`
    height:70px;
    width:100%;
    margin:0;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    img {
    margin-left: 18px;
    margin-right: 18px;
    }
`

const Principal= styled.div`
    width: 100vw;
    min-height: 85vh;
    background-color: #E5E5E5;
    display: flex;
    align-items:center;
    text-align: center;
    margin-top: 70px;
    flex-direction: column;
   
`

const ContainerLow = styled.div`
    width:100vw;
    margin:0;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: fixed;
    bottom: 0;
`

const Low = styled.div`
    height:70px;
    width:100%;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position:fixed;

    img {
        margin-bottom: 60px;
        position: relative;
    }
`


const Habits = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
    font-style: normal;
    margin-left: 36px;
`

const Historic = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #52B6FF;
    font-style: normal;
    margin-right: 31px;
`

const Cima = styled.div`
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

const Meus = styled.div `

    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
    margin-left: 20px;
`

const Quadrado = styled.div`
    width: 40px;
    height: 35px;
    margin-right: 20px;
    background-color: #52B6FF;
    border-radius: 4.63636px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    p {
    font-size: 28px;
    color: #FFFFFF;
    font-weight: bold;
    }
`

const Texto = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #666666;
    margin-top: 30px;
    padding: 10px;
   
`

const Informacoes = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    display: none;
`

const Nome = styled.div`

    margin-top:18px;

    input {
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #666666;

    ::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #DBDBDB;
    font-style: normal;
  }
    }
`

const Dias = styled.div`
    width: 235px;
    height: 31px;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    margin-top: 8px;

    button {
        border: 1px solid #D4D4D4;
        background-color: #FFFFFF;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 19px;
        color: #DBDBDB;
}
`

const CancelarESalvar = styled.div`
    width: 170px;
    height: 35px;
    margin-left: 150px;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Cancelar = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #52B6FF;
`

const Salvar = styled.div`
    background-color: #52B6FF;
    width: 84px;
    height: 35px;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #FFFFFF;
    }
`

const Tarefas = styled.div`
    background-color: #FFFFFF;
    width: 340px;
    height: 92px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;
    display: none;

    img{
        width: 13px;
        height: 15px;
        margin-top: 10px;
    }

    p{
    width: 280px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;  
    color: #666666;
    margin-top: 13px;
    margin-right: 35px;
    margin-bottom: 13px;
    }
`

const Tarefa = styled.div`

`

const Div = styled.div`
    display: flex;
`

const Day = styled.div`
  position: fixed;
  margin-top:35px;
  margin-left: 25px;
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 18px;
    

`


