import styled from "styled-components"
import trackit from "../images/trackit.png"
import perfil from "../images/perfil.png"
import bolinha from "../images/bolinha.png"
// import vector from "../images/vector.png"

export default function Habitos () {
    return (
        <Container>
       <ContainerTopo>
        <NavBar>
            <img src={trackit} alt={trackit}/>
            <img src={perfil} alt={perfil}/>
        </NavBar>
       </ContainerTopo>
        <Principal>
      
       </Principal>
       <ContainerLow>
        <Low>
            <Habits>
                Hábitos
            </Habits>
            <img src={bolinha} alt={bolinha}/>
           
            
            <Historic>
                Histórico
            </Historic>
        </Low>
        {/* <Teste >
            <img src={vector} alt={vector}/>
            </Teste> */}
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
    justify-content: center;
    text-align: center;
    margin-top: 70px;
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

// const Teste = styled.div`

//     img {
//         position:absolute;
//         z-index: 2;
//         margin-bottom: 5px;
//         margin-left:5px;
        
        
//     }

// `

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