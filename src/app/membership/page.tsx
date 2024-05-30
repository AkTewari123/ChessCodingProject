"use client";
import * as React from "react";
import Navbar from "/Users/akshattewari/Documents/chesscodingproject/src/app/components";
import New from "/Users/akshattewari/Documents/chesscodingproject/src/app/components";
//import findBrowser from "./browser";
export default function Home() {
  /*   const [c, setC] = useState("hidden");
  if (!findBrowser()) {
    setC("block");
  } */
  const certificateImage =
    "border-lightorange  border-[5px] ml-[3%] w-[30%] phone:ml-[50%] phone:w-[45%] phone:mt-[5%] tablet:w-[45%] smtablet:w-[45%] smtablet:mt-[9%] mt-[4%] tablet:mt-[7%] absolute phone:rounded-[20px] rounded-[50px]";
  const imageTwo =
    "ml-[9%] tablet:ml-[50%] phone:ml-[1%] phone:w-[45%] phone:mt-[5%] smtablet:ml-[3%] smtablet:mt-[9%] smtablet:ml-[52%] smtablet:w-[45%] tablet:mt-[7%] w-[30%] tablet:w-[45%] mt-[28%] phone:rounded-[20px] absolute rounded-[50px] border-lightorange border-[5px]";
  const memberHeader =
    "text-[350%] phone:text-[200%] pt-[100px] smtablet:text-[300%] font-nunito text-center pt-[5%] underline underline-offset-[20px] phone:underline-offset-[10px] decoration-8 phone:decoration-4 decoration-wavy decoration-lightorange";
  const divBody = "mt-[0%] bg-blackGood text-white h-screen";
  const googleFormImport = `phone:w-[100%] tablet:w-[100%] phone:ml-[0%] tablet:mt-[50%] rounded-[20px] bg-white align-center smtablet:w-[100%] smtablet:ml-[0%] mt-[7%] w-[45%] smtablet:mt-[55%] smtablet:h-[60%] tablet:h-[60%] h-[80%] phone:h-[40%] phone:mt-[45%] opacity-100 border-lightorange border-[5px] tablet:ml-[0%] ml-[55%]`;
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
        <New/>
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
