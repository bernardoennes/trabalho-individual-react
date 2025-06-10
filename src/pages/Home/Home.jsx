import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tema from "../Tema/Tema";
import BoasVindas from "../BoasVindas/BoasVindas";
import Tarefas from "../Tarefas/Tarefas";
import Button from "../../components/button/button";
import styles from "./Home.module.css";
import temaStyles from "../Tema/Tema.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <h1>Trabalho Individual</h1>
      <nav>
        <Button to="/tema">Questão 1 - Tema Claro/Escuro</Button>
        <Button to="/boasvindas">Questão 2 - Mensagem de Boas-Vindas</Button>
        <Button to="/tarefas">Questão 3 - Lista de Tarefas</Button>
      </nav>
    </div>
  );
}

export default function Home() {
  const [claro, setClaro] = useState(false);

  useEffect(() => {
    document.body.className = claro ? temaStyles.claro : temaStyles.escuro;
  }, [claro]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tema" element={<Tema claro={claro} setClaro={setClaro} />} />
        <Route path="/boasvindas" element={<BoasVindas />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </Router>
  );
}