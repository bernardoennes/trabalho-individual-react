import { useState } from "react";
import styles from "./BoasVindas.module.css";
import Button from "../../components/button/button";

export default function BoasVindas() {
  const [msg, setMsg] = useState("Olá!");
  return (
    <div className={styles.container}>
      <p className={styles.msg}>{msg}</p>
      <Button onClick={() => setMsg("Bem-vindo!")}>Entrar</Button>
      <Button to="/">Voltar para a pagina principal</Button>
    </div>
  );
}