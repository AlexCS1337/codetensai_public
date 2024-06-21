/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/navbar";
import SocialsBar from "../components/socialsbar";

export default function Examples() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/img/codetensai-logo.png"
          alt="Code Tensai Logo"
          width={200}
          height={100}
          priority
        />
      </div>

      <div>
        <p>To be added</p>
      </div>

      <NavBar />

      <div className={styles.description}>
        <SocialsBar />
      </div>
    </main>
  );
}
