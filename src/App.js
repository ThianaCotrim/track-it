import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos"
import Hoje from "./pages/Hoje"
import React, { useState } from "react";
import Historico from "./pages/Historico"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [fotoPerfil, setFotoPerfil] = useState()
  


      return (
        <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Login setFotoPerfil={setFotoPerfil} />}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos fotoPerfil={fotoPerfil}/>}/>
          <Route path="/hoje" element={<Hoje fotoPerfil={fotoPerfil}/>}/>
          <Route path="/historico" element={<Historico fotoPerfil={fotoPerfil}/>}/>
          
        </Routes>
       </BrowserRouter>

  )
}

export default App;
