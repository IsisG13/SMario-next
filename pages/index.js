// import Head from "next/head";
// import styles from "@/styles/Home.module.css";
// import { FaSearch } from "react-icons/fa";
// import Image from "next/image";
// import Banner from "./imagens/banner.avif";
// import Mario1 from "./imagens/superMario1.avif";
// import Mario2 from "./imagens/superMario2.avif";
// import Mario3 from "./imagens/superMario3.avif";
// import Mario4 from "./imagens/superMario4.avif";
// import Mario5 from "./imagens/superMario5.avif";
// import Mario6 from "./imagens/superMario6.avif";

// export default function Home() {
//   return (
//     <header>
//       <Head>
//         <title>PlayerOne</title>
//         <meta name="description" content="Generated by create next app" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className={styles.cabecalho}>
//         <h1>
//           Player<span>One</span>
//         </h1>
//         <div className={styles.search}>
//           <input className={styles.input} type="text" placeholder="Pesquisa" />
//           <FaSearch
//             style={{
//               width: "1em",
//               height: "1em",
//               color: "#A7C0EA",
//             }}
//           />
//         </div>

//         <div className={styles.login}>
//           <button>Login</button>
//         </div>
//       </div>

//       <div className={styles.banner}>
//         <Image className={styles.banner} src={Banner} />
//         <h1>Promoção de Aniversário</h1>
//         <p>Totos os produtos com 20% de desconto</p>

//         <button>Super Mario</button>
//       </div>

//       <div className={styles.conteudo}>
//         <h1>Super Mario</h1>
//         <div >
//           <Image className={styles.imagens} src={Mario1} width={192} height={127} />
//           <Image className={styles.imagens} src={Mario2} width={192} height={127} />
//           <Image className={styles.imagens} src={Mario3} width={192} height={127} />
//           <Image className={styles.imagens} src={Mario4} width={192} height={127} />
//           <Image className={styles.imagens} src={Mario5} width={192} height={127} />
//           <Image className={styles.imagens} src={Mario6} width={192} height={127} />
//         </div>
//       </div>
//     </header>
//   );
// }

// pages/index.js

import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { conteudo } from ".//api/conteudo";
import Link from "next/link";
import Cabecalho from "./api/cabecalho";

export default function Home() {
  const { banner, superMario } = conteudo;

  return (
    <header>
      <Head>
        <title>PlayerOne</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cabecalho/>

      <div className={styles.banner}>
        <Image className={styles.banner} src={banner.src} />
        <h1>{banner.title}</h1>
        <p>{banner.description}</p>

        <button>Super Mario</button>
      </div>

      <div className={styles.conteudo}>
        <h1>Super Mario</h1>
        <div>
          {superMario.map((item, index) => (
            <div className={styles.conteudo_imagens} key={index}>
              <Image
                className={styles.imagens}
                src={item.src}
                width={item.width}
                height={item.height}
              />
              {/* <p>{item.text}</p>
              <p>Preço: {item.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
