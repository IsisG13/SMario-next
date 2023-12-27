// pages/login.js

import Link from "next/link";
import Cabecalho from "./api/cabecalho";
import styles from "@/styles/Login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Icon } from "@iconify/react";

export default function Login() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === "" || email.trim() === "" || password.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setErro("");
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
          <input
            className={styles.input}
            type="text"
            placeholder="Pesquisa"
          />
          <FaSearch
            style={{
              width: "1em",
              height: "1em",
              color: "#A7C0EA",
            }}
          />
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
          {erro && <div className={styles.mensagemErro}>{erro}</div>}

          <div className="rodape">
            <Link className="cabecalho_linkPaginaINicial" href="/">
              <Icon color="#628FD9" width="3rem" icon="ph:game-controller" />
              <h1>
                Player<span>One</span>
              </h1>
            </Link>

            <h4>Desenvolvido por Isis Guimarães | 2023</h4>
          </div>
        </div>
      </div>
    </>
  );
}
