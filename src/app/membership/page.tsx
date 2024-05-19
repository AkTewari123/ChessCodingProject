"use client";
import * as React from "react";
import Navbar from "/Users/akshattewari/Documents/chesscodingproject/src/app/components";
//import findBrowser from "./browser";
export default function Home() {
  /*   const [c, setC] = useState("hidden");
  if (!findBrowser()) {
    setC("block");
  } */
  const certificateImage =
    "border-lightorange border-[5px] ml-[3%] w-[25%] mt-[3%] absolute rounded-[50px]";
  const imageTwo =
    "ml-[9%] w-[25%] mt-[22%] absolute rounded-[50px] border-lightorange border-[5px]";
  const memberHeader =
    "text-[350%] font-nunito text-center pt-[5%] underline underline-offset-[20px] decoration-8 decoration-wavy decoration-lightorange";
  const divBody = "mt-[0%] bg-blackGood text-white h-screen";
  const googleFormImport = `rounded-[20px] bg-white align-center mt-[7%] w-[35%] h-[60%] opacity-100 border-lightorange border-[5px] ml-[55%]`;
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <body style = {{backgroundColor: "#171717"}}>
        <Navbar
          borderOne="decoration-2"
          borderTwo="decoration-2"
          borderThree="decoration-4"
        />
        <div className={divBody}>
          <h1 className={memberHeader}>
            <b>Get a Membership Today!</b>
          </h1>
          <img
            src="https://marlborochess.com/wp-content/uploads/2023/03/ChessPic1.jpg"
            className={certificateImage}
          />
          <img
            src="https://marlborochess.com/wp-content/uploads/2023/09/MKCC-June2023-1-2048x1536.jpg"
            className={imageTwo}
          />
          {/*       <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="img1.jpg" style="width:100%">
      <div class="text">Caption Text</div>
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="img2.jpg" style="width:100%">
      <div class="text">Caption Two</div>
    </div>
  
    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="img3.jpg" style="width:100%">
      <div class="text">Caption Three</div>
    </div>
   */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSejcG_4XjI447i0Px5KcdLqFQaMHjmiE6jPbz1y3X3teFDnJA/viewform?embedded=true"
            className={googleFormImport}
          >
            Loading…
          </iframe>
        </div>
      </body>
    </>
  );
}
