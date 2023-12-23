/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "../page.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.center}>
          <Image
            src="/img/codetensai-logo.png"
            alt="Code Tensai Logo"
            width={200}
            height={100}
            priority
          />
        </div>
        <p
          css={{
            display: "flex",
            justifyContent: "center",
            color: "#737373",
            fontSize: "14px",
            marginTop: "-85px",
          }}
        >
          コード天才
        </p>
      </div>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
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

      <div className={styles.grid}>
        <a href="/about" className={styles.card}>
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Code Tensai and what they offer.
          </p>
        </a>

        <a href="/projects" className={styles.card}>
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
