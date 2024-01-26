import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="title">Novo projeto em desenvolvimento...</h1>
      <Image
        src="/logo.png"
        width={250}
        height={250}
        alt="Logo"
      />
      <small>
        R. Natale Petri, 580 - Jardim Samambaia, Barra Bonita - SP, 17342-500
        <br /><b>(14) 99152-7687</b>
      </small>
    </main>
  );
}
