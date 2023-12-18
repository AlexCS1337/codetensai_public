import Image from "next/image";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <main className={styles.main}>
      <div>
        <p>Text goes here</p>
      </div>

      <div className={styles.grid}>
        <a
          href="/about"
          className={styles.card}
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>
            Find in-depth information about Code Tensai and what they offer.
          </p>
        </a>

        <a
          href="/currentprojects"
          className={styles.card}
        >
          <h2>
            Current Projects <span>-&gt;</span>
          </h2>
          <p>Check out current projects being worked on</p>
        </a>

        <a
          href="/examples"
          className={styles.card}
        >
          <h2>
            Examples <span>-&gt;</span>
          </h2>
          <p>Some examples of how your website can look!</p>
        </a>

        <a
          href="/contact"
          className={styles.card}
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>
            Contact now for a quote or more information.
          </p>
        </a>
      </div>
        

      <div className={styles.description}>
        <p>This is a work in progress website</p>
        <div>
          <a
            href="https://codetensai.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            2023 ©{" "}
            <Image
              src="/codetensai-logo.png"
              alt="Code Tensai Logo"
              // className={styles.codetensaiLogo}
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
