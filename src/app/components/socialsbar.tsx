/** @jsxImportSource @emotion/react */
"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons"

export default function SocialsBar() {
  return (
    <>
      <p>This website is a work in progress</p>
      <div>
        <div>
          <SocialIcon network="facebook" />
          <SocialIcon network="twitter" />
          <SocialIcon network="github" url="https://github.com/AlexCS1337" />
        </div>
        <a
          href="https://codetensai.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          2023 ©{" "}
          <Image
            src="/img/codetensai-logo.png"
            alt="By Code Tensai Logo"
            width={100}
            height={50}
            priority
          />
        </a>
      </div>
    </>
  );
}
