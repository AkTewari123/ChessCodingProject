"use client";
import Link from "next/link";

export default function Home() {
  const topImg = "absolute ml-[10%] mt-[20%] h-[15%] object-fill flex-auto";
  const aboutUsHeader =
    "text-[150%] text-white w-[150px] inline-block font-nunito p-2 h-[150%] border-b-2 border-white";
  const otherHeaders =
    "text-[150%] text-white font-nunito  ml-[2%] p-2 border-b-2 border-white h-[150%]";
  const backgroundTop =
    "justify-center bg-gradient-to-tr from-darkvi via-30% via-darkpurp via-lightorange via-80%  to-yell h-[500px] flex flex-wrap";
  const header =
    "text-center relative place-content-center justify-center p-[10px] flex flex-row  h-[10%]";
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <body>
        <div className={backgroundTop}>
          <div className={header}>
            <Link href="/" className={aboutUsHeader}>
              About Us
            </Link>

            <Link href="/tournaments" className={otherHeaders}>
              Tournaments
            </Link>

            <Link href="/membership" className={otherHeaders}>
              Classes
            </Link>
          </div>
          <img
            className={topImg}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php4SF9w8.png"
            alt="Image Not Loading"
          />
        </div>
      </body>
    </>
  );
}
