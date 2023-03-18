import {useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import fotoprincipal from "../images/group 8.png"
import axios from "axios"
import Loader from "../components/ThreeDots"



export default function Login ({setFotoPerfil, setTokem}) {

    const [email, setEmail] = useState ([undefined])
    const [password, setPassword] = useState([undefined])
    const [disable, setDisable] = useState(false)

    
    const navigate = useNavigate()

    function entrar (e) {
        
      
        e.preventDefault()
        const body = {email, password}

        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(url, body)

        
        

        promise.then((res) => {
            navigate("/hoje") 
            setTokem(res.data.token)
            setFotoPerfil(res.data.image)})
      
        promise.catch(err => alert(err.response.data.message)  (setDisable(disable)))
        setDisable(!disable)
        
    }

        
return (
   <Container>
    < Imagem>
   <img src={fotoprincipal} alt={fotoprincipal}/>
   </Imagem>
   <form onSubmit={entrar}>
    < Email >
    <input disabled={disable} data-test="email-input" type="email" placeholder="email" required value={email} onChange={e => setEmail(e.target.value)}/>
    </Email>
    < Senha >
    <input disabled={disable} data-test="password-input" type="password" placeholder="senha" required value={password} onChange={e => setPassword(e.target.value)}/>
    </Senha>
    
    < Botao >
    <button disabled={disable} data-test="login-btn" type="submit"> {disable ? <Loader /> : "Entrar"} </button>
    
    </Botao>
    </form>
    <Link data-test="signup-link" to="/cadastro">
    <Texto>
    Não tem uma conta? Cadastre-se!
    </Texto>
    </Link>
   
   </Container>
)
}


const Imagem = styled.div `
    margin-top: 68px;
    margin-bottom: 33px;
`

const Email = styled.div`

    margin-bottom:8px;

    input {
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 5px;
   

    ::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #DBDBDB;
    font-style: normal;
  }
    }
`

const Senha = styled.div `

    margin-bottom:8px;
    

    input {
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 5px;

    ::placeholder {
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: #DBDBDB;
    font-style: normal;
  }
    }  
`

const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Botao = styled.div`
    

    button {
    width: 310px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 21px;
    color: #FFFFFF;
    font-style: normal;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    }
`

const Texto = styled.div`
    margin-top: 35px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #52B6FF;
    text-decoration-line: underline;
`
