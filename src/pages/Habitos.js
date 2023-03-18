import styled from "styled-components"
import trackit from "../images/trackit.png"
import perfil from "../images/perfil.png"
import bolinha from "../images/bolinha.png"
import lixeirinha from "../images/lixeirinha.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"



export default function Habitos ({fotoPerfil, tokem}) {
    
  
    const [name, setName] = useState([])
    const [days, setDays] = useState([])

     const dias = [
        {id: 0, dia: "D"},
        {id: 1, dia: "S"},
        {id: 2, dia: "T"},
        {id: 3, dia: "Q"},
        {id: 4, dia: "Q"},
        {id: 5, dia: "S"},
        {id: 6, dia: "S"},
     ]

    const [cadastrar, setCadastrar] = useState("display: none")
    const [selecionado, setSelecionado] = useState([])
    const [mostrarTarefas, setMostrarTarefas] = useState([])
    const [disable, setDisable] = useState(false)
    

    function cadastrarTarefa () {
        setCadastrar("")
    }

    function selecionar (d) {
        console.log(d)
      if (!selecionado.includes(d)){
        setSelecionado([...selecionado, d])
      } else {
        setSelecionado(selecionado.filter(dia => dia !== d))
      }
    }

    useEffect(() => {

        const config = {headers: { Authorization: `Bearer ${tokem}`}}
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        
        const promisse = axios.get(URL, config )
        
        promisse.then(res => setMostrarTarefas(res.data))
        promisse.catch(err => (console.log(err.response.data)))


    }, [cadastrarHabito])



    function cadastrarHabito (e) {
        e.preventDefault()


        const config = {headers: { Authorization: `Bearer ${tokem}`}}
   
        const body = {name, days: selecionado}

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.post(url, body, config)
       
        promise.then(res => (setCadastrar("display:none")) (console.log(res.data)) (setDisable(disable)))
        promise.catch(err => alert(err.response.data.message))
        setDisable(disable)
        setName([])
        setSelecionado([])

    }

    function deletar (id) {
        
        const confirmacao = window.confirm('Tem certeza que deseja excluir essa tarefa?');

        if (confirmacao) {
        const config = {headers: { Authorization: `Bearer ${tokem}`}}

        const Url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const promice = axios.delete(Url, config)

        promice.then(res => console.log(res.data))
        promice.catch(err => console.log(err.response.data))
    } else {

    }
} 



    function cancelar (){
        setCadastrar("display:none")
    }
  

    return (
        <Container>

       <ContainerTopo>
        <NavBar>
            <Link to="/">
            <img src={trackit} alt={trackit}/>
            </Link>
            
            <Imagem>
            <img src={fotoPerfil} alt={perfil}/>
            </Imagem>
        </NavBar>
       </ContainerTopo>
       
        <Principal>
        < Cima>
        <Meus>
        Meus Hábitos
        </Meus>
            <Quadrado disabled={disable} data-test="habit-create-btn" onClick={cadastrarTarefa}>
                <p>+</p>
            </Quadrado>
        </Cima>

        <Informacoes data-test="habit-create-container" cadastrar={cadastrar}>
            <form>
            < Nome>
                 <input data-test="habit-name-input" disabled={disable} value={name} onChange={e => setName(e.target.value)} type="text" placeholder="nome do hábito"/>
            </Nome>
            <ContainerDias >
            {dias.map(({id, dia}) => {
                return (
                   <Days
                   data-test="habit-day"
                   value={days}
                   onChange={e => setDays(e.target.value)}
                    key={id}
                    id={id}
                    select = {selecionado.includes(id)}
                    onClick = {() => selecionar(id)}
                    type = "button" 
                    disabled={disable}>
                        {dia}
                    </Days>
                )
            })}
            </ContainerDias>
                        <CancelarESalvar>
                <Cancelar disabled={disable} data-test="habit-create-cancel-btn" onClick={cancelar}>
                    Cancelar
                </Cancelar>
                <Salvar disabled={disable} data-test="habit-create-save-btn" onClick={cadastrarHabito}>
                    <p>Salvar</p>
                </Salvar>
            </CancelarESalvar>
            </form>
        </Informacoes>
      
            {mostrarTarefas.length > 0 ? 
            <>
             {mostrarTarefas.map(({id, name, days}) => (
                <Tarefas data-test="habit-container">
            <Total>
            <p data-test="habit-name">
                {name}
            </p>
            <AgoraVai>
            {dias.map(({id ,dia}) => {
                return (
                     <Dentro data-test="habit-day" marcar = {days.includes(id)}>
                          {dia}             
                      </Dentro>
                    )
                })}
               </AgoraVai>
              
               </Total>
            <img data-test="habit-delete-btn" onClick={() => deletar(id)} src={lixeirinha} alt={lixeirinha}/>
            </Tarefas>  
                ))}
                </>
                 :
                 <Texto>
                 Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                 </Texto>
        
        
        }

           

      

       </Principal>

       <ContainerLow>
        <Low data-test="menu">
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
    height: 100%;
    margin-bottom: 90px;
   
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
    width: 350px;
    height: 180px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    display: ${({cadastrar}) => cadastrar ? "none" : ""};
    margin-bottom: 20px;
   
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



const ContainerDias = styled.div`
   
    display: flex;
    justify-content: center;
    margin-right: 10px;
`

const Days = styled.div`
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-top: 8px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
   font-family: 'Lexend Deca', sans-serif;
   font-weight: 400;
   font-size: 19px;
   display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({select}) => select ? "#CFCFCF" : "#FFFFFF"};
 color: ${({select}) => select ? "#FFFFFF" : "#DBDBDB"};
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
    width: 350px;
    height: 92px;
    border-radius: 5px;
    display: flex;
    margin-bottom: 10px;

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


const Day = styled.div`
  position: fixed;
  margin-top:35px;
  margin-left: 25px;
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 18px;
    

`

const Imagem = styled.div`
 border-radius: 98.5px;
 img {
    border-radius: 98.5px;
    width: 51px;
    height: 51px;
 }`

const Div = styled.div`
    display: flex;
`


const Total = styled.div`

display: flex;
flex-direction: column;

`


const Dentro = styled.div`
 background-color: ${({marcar}) => marcar ? "#CFCFCF" : "#FFFFFF"};
 width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-top: 8px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
   font-family: 'Lexend Deca', sans-serif;
   font-weight: 400;
   font-size: 19px;
   display: flex;
    justify-content: center;
    align-items: center;
    color: #DBDBDB;
`

const AgoraVai = styled.div`

display: flex;
`
