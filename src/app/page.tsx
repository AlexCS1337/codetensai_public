/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import NavBar from "./components/navbar";
import SocialsBar from "./components/socialsbar";

export default function Home() {
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
          fontSize: "26px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Link href="/contact">
          <span
            css={{
              outline: "2px solid #737373",
              outlineOffset: "2px",
              padding: "0.25rem",
              borderRadius: "0.5rem",
            }}
          >
            Hire me
          </span>
        </Link>
      </div>

      <div css={{ fontSize: "26px", color: "#737373" }}>
        <p>For businesses with creative taste</p>
      </div>

      <NavBar />

      <div className={styles.description}>
        <SocialsBar />
      </div>
    </main>
  );
}
