"use client";
import Link from "next/link";

export default function Home() {
  var topImageHeight = 110;
  var topImageWidth = topImageHeight / 2;
  var chessBoardHeight = 50;
  var margins = {};
  var chessBoardWidth = chessBoardHeight / 2;
  const chessBoardTopImage = `rotate-[345deg] absolute mt-[20%] mr-[60%] h-[${chessBoardHeight}%] w-[${chessBoardWidth}%] object-fill flex-auto`;
  const aboutUsHeader =
    "text-[150%] text-white w-[125px] p-[2px] font-nunito  border-b-2 border-white";
  const otherHeaders =
    "text-[150%] text-white font-nunito  ml-[4%] p-[2px] border-b-2 border-white ";
  const backgroundTop = `object-contain justify-center bg-gradient-to-tr from-darkvi via-30% via-darkpurp via-lightorange via-80%  to-yell h-[500px] flex flex-wrap h-screen`;
  const headImage = `absolute h-[${topImageHeight}%] w-[${topImageWidth}%] float-left mr-[90%]`;
  const greeting = `text-[350%] text-white w-[40%] text-center float-right mb-[30%] font-bold`;
  const bodyC = `font-nunito`;
  const header =
    "text-center mt-[1%] h-[5%] relative place-content-center font-semibold justify-center p-[1] flex flex-row  w-[100%]";
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
              src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png"
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
          <div className={greeting}>Welcome to the Marlboro Chess Club!</div>
        </div>
      </body>
    </>
  );
}
