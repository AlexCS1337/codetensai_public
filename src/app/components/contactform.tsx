/** @jsxImportSource @emotion/react */
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID &&
      form.current
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            alert(result.text);
          },
          (error) => {
            alert(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div css={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div css={{ display: "flex", justifyContent: "space-between" }}>
          <input
            name=""
            id="user_name"
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
            name=""
            id="user_email"
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
            id="user_message"
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
        <input
          type="submit"
          css={{
            fontSize: "16px",
            width: "100%",
            height: "42px",
            outline: "2px solid #000000",
            outlineOffset: "2px",
            padding: "0.75rem",
            borderRadius: "0.5rem",
            cursor: "pointer",
          }}
          value="Submit"
        ></input>
      </div>
    </form>
  );
};
