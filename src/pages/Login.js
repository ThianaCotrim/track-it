import styled from "styled-components"
import fotoprincipal from "../images/group 8.png"

export default function Login () {
return (
   <Container>
    < Imagem>
   <img src={fotoprincipal} alt={fotoprincipal}/>
   </Imagem>
    < Email >
    <input type="email" placeholder="email"/>
    </Email>
    < Senha >
    <input type="password" placeholder="senha"/>
    </Senha>
    < Botao >
    <button>
        Entrar
    </button>
    </Botao>
    <Texto>
    Não tem uma conta? Cadastre-se!
    </Texto>
   
   </Container>
)
}

const Imagem = styled.div `
    margin-top: 68px;
    margin-bottom: 33px;

`




const Email = styled.div`

    margin-bottom:15px;

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

    margin-bottom:15px;
    

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
