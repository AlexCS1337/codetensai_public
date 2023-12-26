/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/navbar";

export default function About() {
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

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <h2>Code Tensai (Loosely translates to Code Genius) </h2>
        <p>
          Started in 2023 Code Tensai is a freelance web development
          startup/company. Offering modern web design solutions for all your new
          business needs.
        </p>
        <p>
          The owner of the site has a Bachelor of IT and roughly 4+ years of
          experience in Web Design and Software Development.
        </p>
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
