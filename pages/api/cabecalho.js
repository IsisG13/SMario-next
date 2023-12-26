import { FaSearch } from "react-icons/fa";
import styles from "@/styles/Login.module.css";
import Link from "next/link";

export default function Cabecalho() {
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
      </div>

      {/* <div className={styles.login}>
          <Link className={styles.link_login} href="/login">
            <button>Login</button>
          </Link>
        </div> */}
    </>
  );
}
