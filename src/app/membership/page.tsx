"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <body className="relative">
        <header className="flex flex-row md:flex-col mt-0 bg-whitep-4 text-white text-[150%] ">
          <Link
            href="/"
            className="text-black ml-[2%] md:ml-[2%] font-nunito hover:text-slate-400 transition-all duration-[500ms] p-3"
          >
            About Us
          </Link>
          <Link
            href="/membership"
            className="text-black ml-[5%] font-nunito hover:text-slate-400 transition-all duration-[500ms] p-3 underline "
          >
            <b>Membership</b>
          </Link>
          <Link
            href="/tournaments"
            className="text-black ml-[5%] md:ml-[2%] font-nunito hover:text-slate-400 transition-all duration-[500ms] p-3 "
          >
            Classes & Tournaments
          </Link>
        </header>
        <div className="mt-0 relative bg-cover bg-center h-[30%] py-[5%] bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpVmOHiw.png')]">
          <div className="px-10">
            <h1 className=" align-middle text-[450%] text-white  font-nunito text-center items-center justify-center">
              <b>Welcome to the Marlboro Chess Club! </b>
              <p className=" text-[35%]">
                {" "}
                by Akshat Tewari and Rakesh Chandwani
              </p>
            </h1>
          </div>
        </div>
        <div className="h-scre en bg-white bg-cover md:flex-column">
          <div className="flex flex-row">
            <div className="rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 p-1 w-[25%] overflow-auto mt-[10%] ml-[3%] h-fit">
              <div className="flex bg-black overflow-auto text-center h-full">
                <article className="text-[175%] font-nunito bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 inline-block text-transparent bg-clip-text p-[5%] block w-[100%] overflow-auto">
                  <strong>Sign Up Today!</strong>
                  <p className="align-center text-center justify-center text-[75%] text-white mt-[3%]">
                    Sign up now for affordable chess tutoring to take your child
                    to the next level! By getting tutoring from 1500 USCF rated
                    player Akshat Tewari, you get a custom plan perfect for your
                    needs! With progress assessments, puzzles, game analysis,
                    and endgame lessons, anyone rated 500 to 1200 can learn
                    something!
                  </p>
                </article>
              </div>
            </div>
            <div className=" rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 p-1 w-[25%] overflow-auto mt-[10%] ml-[10%]">
              <div className="flex bg-black overflow-auto text-center h-full">
                <article className="text-[175%] font-nunito bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 inline-block text-transparent bg-clip-text p-[5%] block w-[100%] overflow-auto">
                  <strong>Our Story</strong>
                  <p className="align-center text-center justify-center text-[75%] text-white mt-[3%]">
                    As a chess club, we started virtually as the pandemic
                    commenced. Some kids wanted to make an official chess club
                    as opposed to our virtual meetings after school ended. After
                    the pandemic started to slow down and people were going back
                    to in-person school, we decided to make an in-person club!
                    We have been thriving ever since!
                  </p>
                </article>
              </div>
            </div>
            <div className="rounded-md bg-gradient-to-r bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 p-1 w-[25%] overflow-auto mt-[10%] ml-[10%] h-fit">
              <div className="flex bg-black overflow-auto text-center h-full">
                <article className="text-[175%] font-nunito bg-gradient-to-r from-red-500 via-pink-500 to-indigo-500 inline-block text-transparent bg-clip-text p-[5%] block w-[100%] overflow-auto">
                  <strong>How Do I Sign up?</strong>
                  <p className="align-center text-center justify-center text-[75%] text-white mt-[3%]">
                    By texting 732-772-3931, you can express your interest in
                    our chess club! Remember to cruise through the website to
                    find out more about class dates and times! In addition, you
                    can also sign up for private tutoring with Akshat for the
                    $20 for 30 minutes deal! Have a nice day! We hope to see you
                    in our chess club!
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
