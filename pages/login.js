import Link from "next/link";
import Cabecalho from "./api/cabecalho";
import styles from "@/styles/Login.module.css";

export default function Login() {
  return (
    <>
      <Cabecalho />

      <div className={styles.login_container}>
        <h1>Fazer Login</h1>

        <div className={styles.conteudo}>
          <input type="text" placeholder="Nome" /> <br />
          <input type="email" placeholder="Email" /> <br />
          <input type="password" placeholder="Senha" /> <br />
          <Link className={styles.link} href="/">
            <button type="submit">Enviar</button>
          </Link>
        </div>
      </div>
    </>
  );
}
