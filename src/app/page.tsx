"use client";
import Link from "next/link";
import * as React from "react";
import {
  useState,
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  UIEvent,
} from "react";
console.log("console works");
export default function Home() {
  const [x, setX] = useState(0);
  const handleChange = (e: Event) => {
    console.log("This is working");
    console.log(x);
    setX(80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleChange);
    console.log("This is working1");
    return () => {
      console.log("This is working2");

      window.removeEventListener("scroll", handleChange);
    };
  }, []);
  const sectionTwo =
    "z-30 text-[450%] font-bold bg-blackGood h-screen text-white";
  const purpleBoard = "absolute w-[25%] z-0 mt-[10%] ml-[75%]";
  var chessBoardHeight = 50;
  var chessBoardWidth = chessBoardHeight / 2;
  var chessSetHeight = 12;
  var chessSetWidth = chessSetHeight * 4;
  const chessSetStyle = `z-20 align-middle absolute h-[${chessSetHeight}%] 
  w-[${chessSetWidth}%] mt-[10%]`;
  const chessBoardTopImage = `z-20 text-white rounded-[50px] border-[3px] absolute rotate-[345deg] mt-[20%] mr-[65%] h-[${chessBoardHeight}%] w-[${chessBoardWidth}%] object-fill flex-auto`;
  const aboutUsHeader =
    "z-20 text-white text-[150%] w-[140px] font-nunito p-[15px] underline decoration-4 underline-offset-8 border-white";
  const otherHeaders =
    "z-20 text-white text-[150%] font-nunito  ml-[4%] p-[15px] underline decoration-2 underline-offset-8 border-white ";
  const backgroundTop = `z-20 object-contain justify-center bg-gradient-to-tr from-darkvi via-30% via-darkpurp via-lightorange via-80%  to-yell h-[500px] flex flex-wrap h-screen`;
  const miniText = `z-20 text-white text-[16px]`;
  const headImage = `z-20 absolute h-[200%] float-left mr-[90%] `;
  const greeting = `z-20 text-white text-[350%] w-[40%] text-center mt-[6%] font-bold`;
  const bodyC = `font-nunito text-white`;
  const ourStory =
    "bg-black bg-opacity-70 mt-[30%] text-[250%] absolute rounded-[30px] text-white font-semibold pt-[2%] px-[5%] h-[15%]";
  const header = `bg-black bg-opacity-${x} text-center h-[8%] fixed z-30 place-content-center font-semibold justify-center p-[1] flex flex-row  w-[100%]`;
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <body className={bodyC}>
        <div className={backgroundTop}>
          <header className={header}>
            <img
              className={headImage}
              src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/phpr9TG5y.png"
              alt="Image Not Loading"
            />
            <Link href="/" className={aboutUsHeader}>
              About Us
            </Link>

            <Link href="/tournaments" className={otherHeaders}>
              Tournaments
            </Link>

            <Link href="/membership" className={otherHeaders}>
              Classes
            </Link>
          </header>
          <img
            className={chessBoardTopImage}
            src="https://i0.wp.com/jkcreativewood.com/wp-content/uploads/2016/12/XL-CHESS-SET-DETAIL-scaled.jpg?fit=2560%2C2560&ssl=1"
            alt="Image Not Loading"
          />
          <img
            className={purpleBoard}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/phpHMsaHE.png"
          />
          <div className={greeting}>
            Welcome to the Marlboro Chess Club!
            <p className={miniText}>By Akshat Tewari and Rakesh Chandwani</p>
          </div>
          <div className={ourStory}>Scroll Down to See Our Story!</div>
        </div>
        <div className={sectionTwo}>
          <div className="text-center h-[115%]">
            <img
              className={chessSetStyle}
              src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php1la3I7.png"
            />
            <article>Our Story</article>
          </div>
          <article className=""></article>
          <div></div>
        </div>
      </body>
    </>
  );
}
