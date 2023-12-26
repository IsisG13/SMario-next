import Link from "next/link";
import Cabecalho from "./api/cabecalho";
import styles from "@/styles/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === "" || email.trim() === "" || password.trim() === "") {
      alert("Preencha os campos corretamente");
      return;
    }

    router.push("/paginaInicial");
  };

  return (
    <>
      <div className={styles.cabecalho}>
      <Link className={styles.cabecalho_link} href="/">
        <h1>
          Player<span>One</span>
        </h1>
        </Link>
        <div className={styles.search}>
          <input className={styles.input} type="text" placeholder="Pesquisa" />
          <FaSearch
            style={{
              width: "1em",
              height: "1em",
              color: "#A7C0EA",
            }}
          />
        </div>

        <div className={styles.login}>
          <Link className={styles.link_login} href="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>

      <div className={styles.login_container}>
        <h1>Fazer Login</h1>

        <div className={styles.conteudo}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <br />
            <br />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br />

            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
}
