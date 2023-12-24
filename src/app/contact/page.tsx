/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { toast } from "react-toastify";
import NavBar from "../navbar";

export default function Contact() {
  //todo: fix this toast
  const onClick = () =>
    toast("Form submitted", {
      hideProgressBar: true,
      autoClose: 2000,
      type: "success",
      position: "top-center",
    });

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

        <div css={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div css={{ display: "flex", justifyContent: "space-between" }}>
            <input
              css={{
                fontSize: "16px",
                height: "42px",
                width: "205px",
                outline: "2px solid #00000000",
                outlineOffset: "2px",
                padding: "0.75rem",
                borderStyle: "none",
                borderRadius: "0.5rem",
              }}
              type="text"
              placeholder="Name"
            />
            <input
              css={{
                fontSize: "16px",
                height: "42px",
                width: "205px",
                outline: "2px solid #00000000",
                outlineOffset: "2px",
                padding: "0.75rem",
                borderStyle: "none",
                borderRadius: "0.5rem",
              }}
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              css={{
                fontSize: "16px",
                width: "100%",
                height: "125px",
                resize: "vertical",
                outline: "2px solid #00000000",
                outlineOffset: "2px",
                padding: "0.75rem",
                borderStyle: "none",
                borderRadius: "0.5rem",
              }}
              placeholder="Message"
            ></textarea>
          </div>

          <button
            onClick={onClick}
            css={{
              fontSize: "16px",
              width: "100%",
              height: "42px",
              outline: "2px solid #000000",
              outlineOffset: "2px",
              padding: "0.75rem",
              borderRadius: "0.5rem",
            }}
          >
            Submit Inquiry
          </button>
        </div>
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
