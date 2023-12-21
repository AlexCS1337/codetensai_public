/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          // className={styles.logo}
          src="/img/codetensai-logo.png"
          alt="Code Tensai Logo"
          width={200}
          height={100}
          priority
        />
      </div>
      <div css={{marginTop: "-300px"}}>
        <p>コード天才</p>
      </div>

      <div css={{ fontSize: "24px", textDecoration: "underline" }}>
        <p>For businesses with creative taste</p>
      </div>

      <div className={styles.grid}>
        <a href="/about" className={styles.card}>
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Code Tensai and what they offer.
          </p>
        </a>

        <a href="/currentprojects" className={styles.card}>
          <h2>
            Current Projects <span>-&gt;</span>
          </h2>
          <p>Check out current projects being worked on</p>
        </a>

        <a href="/examples" className={styles.card}>
          <h2>
            Examples <span>-&gt;</span>
          </h2>
          <p>Some examples of how your website can look!</p>
        </a>

        <a href="/contact" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Contact now for a quote or more information.</p>
        </a>
      </div>

      <div className={styles.description}>
        <p>This website is a work in progress</p>
        <div>
          <a
            href="https://codetensai.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 ©{" "}
            <Image
              src="/img/codetensai-logo.png"
              alt="By Code Tensai Logo"
              // className={styles.vercelLogo}
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
