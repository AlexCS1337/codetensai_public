/** @jsxImportSource @emotion/react */
"use client";
import styles from "./page.module.css";

export default function NavBar() {
  return (
    <div className={styles.grid}>
      <a href="/about" className={styles.card}>
        <h2>
          About <span>-&gt;</span>
        </h2>
        <p>Find in-depth information about Code Tensai and what they offer.</p>
      </a>

      <a href="/projects" className={styles.card}>
        <h2>
          Projects <span>-&gt;</span>
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
  );
}
