"use client";
import Link from "next/link";
import * as React from "react";
import Navbar from "/Users/akshattewari/Documents/chesscodingproject/src/app/components";

import {
  useState,
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  UIEvent,
} from "react";
export default function Home() {
  const memberHeader = "text-[350%] font-nunito text-center pt-[5%] underline underline-offset-[20px] decoration-8 decoration-wavy decoration-lightorange";
  const divBody = "mt-[0%] bg-blackGood text-white h-screen";

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <body>
        <Navbar color={"text-white"} />
        <div className={divBody}>
          <h1 className={memberHeader}>
            <b>Get a Membership Today!</b>
          </h1>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSejcG_4XjI447i0Px5KcdLqFQaMHjmiE6jPbz1y3X3teFDnJA/viewform?embedded=true" width="640" height="2779">Loading…</iframe>
        </div>
      </body>
    </>
  );
}
