import styles from "./Tema.module.css";
import Button from "../../components/button/button";

export default function Tema({ claro, setClaro }) {
  return (
    <div className={`${styles.container}`}>
      <h1 className={styles.title}>Alternar Tema</h1>
      <Button onClick={() => setClaro(!claro)}>
        {claro ? "🌙 Tema Escuro" : "☀️ Tema Claro"}
      </Button>
      <Button to="/">⬅ Voltar para a página principal</Button>
    </div>
  );
}
