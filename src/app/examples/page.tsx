/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/navbar";

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
        <p>This is a work in progress website</p>
        <div>
          <a
            href="https://codetensai.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 ©{" "}
            <Image
              src="/img/codetensai-logo.png"
              alt="Code Tensai Logo"
              width={100}
              height={50}
              priority
            />
          </a>
        </div>
      </div>
    </main>
  );
}
