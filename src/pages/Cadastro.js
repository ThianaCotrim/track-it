import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import fotoprincipal from "../images/group 8.png"
import Loader from "../components/ThreeDots"

export default function Cadastro () {

    const [email, setEmail] = useState ([])
    const [password, setPassword] = useState([])
    const [name, setName] = useState ([])
    const [image, setImage] = useState([])
    const [disable, setDisable] = useState(false)
    
    const navigate = useNavigate()

    function cadastrar (e) {
        e.preventDefault()

        const body = {email, password, name, image};
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"

        const promise = axios.post(url, body)

        promise.then(res => navigate("/"))
        promise.catch(err => alert(err.response.data.message) (setDisable(disable)))
        setDisable(!disable) 
    }
    
return (
   <Container>
    < Imagem>
   <img src={fotoprincipal} alt={fotoprincipal}/>
   </Imagem>
   <form onSubmit={cadastrar}>
   < Email >
    <input disabled={disable} data-test="email-input" type="email" placeholder="email"required value={email} onChange={e => setEmail(e.target.value)}/>
    </Email>
    < Senha >
    <input disabled={disable} data-test="password-input" type="password" placeholder="senha"required value={password} onChange={e => setPassword(e.target.value)}/>
    </Senha>
    < Nome>
    <input disabled={disable} data-test="user-name-input" type="text" placeholder="nome"required value={name} onChange={e => setName(e.target.value)}/>
    </Nome>
    < Foto>
    <input disabled={disable} data-test="user-image-input" type="url" placeholder="foto" required value={image} onChange={e => setImage(e.target.value)}/>
    </Foto>
    < Botao >
    <button disabled={disable} data-test="signup-btn" type="submit" >{disable ? <Loader /> : "Cadastrar"} </button>
    </Botao>
    </form>
    <Link data-test="login-link" to="/">
    <Texto>
    Já tem uma conta? Faça login!
    </Texto>
    </Link>
   </Container>
)
}

const Imagem = styled.div `
    margin-top: 68px;
    margin-bottom: 33px;
`

const Container = styled.div `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const Nome = styled.div`

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

const Foto = styled.div`

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