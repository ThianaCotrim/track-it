import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos"
import Hoje from "./pages/Hoje"
import React, { useState } from "react";
import Historico from "./pages/Historico"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [fotoPerfil, setFotoPerfil] = useState()
  const [tokem, setTokem] = useState()
  


      return (
        <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Login setFotoPerfil={setFotoPerfil} setTokem={setTokem}/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos fotoPerfil={fotoPerfil} tokem={tokem}/>}/>
          <Route path="/hoje" element={<Hoje fotoPerfil={fotoPerfil} tokem={tokem}/>}/>
          <Route path="/historico" element={<Historico fotoPerfil={fotoPerfil}/>}/>
          
        </Routes>
       </BrowserRouter>

  )
}

export default App;
