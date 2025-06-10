import { useState } from "react";
import styles from "./Tarefas.module.css";
import Button from "../../components/button/button";

export default function Tarefas() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionar() {
    const novaTarefa = input.trim();
    if (novaTarefa) {
      setTarefas([...tarefas, { texto: novaTarefa, feito: false }]);
      setInput("");
    }
  }

  function toggleFeito(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].feito = !novasTarefas[index].feito;
    setTarefas(novasTarefas);
  }

  function deletar(index) {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Lista de Tarefas</h1>

      <div className={styles.layout}>
        <div className={styles.formulario}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite uma tarefa"
            className={styles.input}
          />
          <Button onClick={adicionar}>Adicionar</Button>
        </div>

        <ul className={styles.lista}>
          {tarefas.map((tarefa, i) => (
            <li
              key={i}
              className={`${styles.item} ${tarefa.feito ? styles.feito : ""}`}
            >
              <span onClick={() => toggleFeito(i)}>{tarefa.texto}</span>
              <button onClick={() => deletar(i)} className={styles.deletar}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Button to="/">⬅ Voltar para a página principal</Button>
    </div>
  );
}
