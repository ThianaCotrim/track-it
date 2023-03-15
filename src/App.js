import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"
import Habitos from "./pages/Habitos"
import Hoje from "./pages/Hoje"
import React from "react";
import Historico from "./pages/Historico"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
      return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/habitos" element={<Habitos/>}/>
          <Route path="/hoje" element={<Hoje/>}/>
          <Route path="/historico" element={<Historico/>}/>
        </Routes>
       </BrowserRouter>

  )
}

export default App;
