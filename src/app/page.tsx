"use client";
import Link from "next/link";

export default function Home() {
  const topImg = "relative ml-[25%] mt-[20%] h-[45%] object-fill";
  const aboutUsHeader =
    "text-[150%] text-white font-nunito relative mt-[.5%] ml-[35%]  border-b-2 border-white";
  const otherHeaders =
    "text-[150%] text-white font-nunito relative mt-[.5%] ml-[5%]  border-b-2 border-white";
  const backgroundTop =
    "bg-gradient-to-tr from-green-500 to-blue-500 h-[500px]";
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <body>
        <div className={backgroundTop}>
          <Link href="/" className={aboutUsHeader}>
            About Us
          </Link>
          <Link href="/tournaments" className={otherHeaders}>
            Tournaments
          </Link>
          <Link href="/membership" className={otherHeaders}>
            Classes
          </Link>
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
