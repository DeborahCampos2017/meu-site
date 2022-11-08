import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Contato from './Pages/Contato';
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import MenuPaginas from "./Pages/MenuPaginas";
import Servicos from "./Pages/Servicos";
import Rodape from "./Pages/Rodape";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <MenuPaginas />
    <Routes>
      <Route index element={<Home />} />
      <Route path="sobre-mim" element={<Sobre />} />
      <Route path="contato" element={<Contato />} />
      <Route path="servicos" element={<Servicos />} />
    </Routes>
    <Rodape />
  </BrowserRouter>
);

reportWebVitals();
