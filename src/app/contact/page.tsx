/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "../page.module.css";
import NavBar from "../components/navbar";
import { ContactForm } from "../components/contactform";

export default function Contact() {
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

      <div css={{ padding: "16px 16px" }}>
        <div css={{ marginBottom: "8px" }}>
          <span
            css={{
              fontSize: "32px",
              fontWeight: "bold",
            }}
          >
            Design Inquiry
          </span>
          <p css={{ fontSize: "16px" }}>
            Have an idea and looking for help in the design? Get in touch now!
          </p>
        </div>
        <ContactForm />
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
