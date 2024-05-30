"use client";
import * as React from "react";
import Navbar from "./components";
import { useState, useEffect } from "react";
console.log("console works");

export default function Home() {
  const [x, setX] = useState(0);
  const [y, setY] = useState("");

  useEffect(() => {
    //createPopup();
    const handleScroll = (e: Event) => {
      console.log("This is working");
      console.log(x);
      setX(80);
      setY("bg-black bg-opacity-60 transition-all duration-[1000ms]");
      console.log(y);
    };

    window.addEventListener("scroll", handleScroll);
    console.log("This is working1");

    return () => {
      console.log("This is working2");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [setTop, setO] = useState(
    `opacity-50 z-20 object-contain justify-center bg-gradient-to-tr from-darkvi via-30% via-darkpurp via-lightorange via-80% to-yell tablet:h-[600px] phone:h-[400px] smtablet:h-[400px] flex flex-wrap h-screen`
  );
  const [sectionTwo, setTwo] = useState(
    `z-30 text-[450%] font-bold bg-blackGood h-screen phone:h-[1px] tablet:h-[1px] smtablet:h-[1px] text-white opacity-50`
  );
  const [brownB, setBoard] = useState(
    `absolute w-[25%] z-10 mt-[10%] ml-[75%] tablet:mt-[27%] smtablet:mt-[10%] opacity-50 z-40 phone:hidden`
  );

  var chessBoardHeight = 50;
  var [z, setZ] = useState(0);

  var chessBoardWidth = chessBoardHeight / 2;

  const purpleBoard = `z-20 align-middle absolute w-[25%] mt-[-3%] phone:hidden`;
  const chessBoardTopImage = `z-20 text-white rounded-[50px] phone:rounded-[30px] phone:h-[110px] phone:w-[110px] border-[3px] absolute mt-[15%] phone:mt-[285px] phone:mr-[0%] mr-[65%] tablet:mr-[70%] tablet:mt-[14%] tablet:h-[200px] tablet:w-[200px] h-[${chessBoardHeight}%] w-[${chessBoardWidth}%] object-fill flex-auto`;

  const miniText = `z-20 text-white laptop:text-[16px] tablet:text-[40%] smtablet:text-[20%] phone:text-[20%]`;

  const greeting = `z-20 text-white text-[300%] phone:mt-[125px] phone:text-[175%] phone:w-[60%] smtablet:text-[150%] smtablet:mt-[15%] tablet:text-[175%] smtablet:text-[175%] w-[40%] tablet:mt-[9%] text-center mt-[6%] font-bold`;

  /* const bodyC = "font-nunito text-white bg-blackGood"; */

  const storyHeader = `underline underline-offset-[20px] phone:text-[70%] decoration-8 decoration-wavy decoration-lightorange smtablet:text-[75%] tablet:text-[75%]`;

  const ourStory =
    "w-[30%] tablet:w-[30%] phone:hidden smtablet:mt-[40%] align-center bg-black bg-opacity-50 laptop:mt-[30%] tablet:mt-[35%] smtablet:mt-[35%] laptop:text-[250%] tablet:text-[150%] tablet:w-[45%] p-[2%] absolute rounded-[30px] text-center text-white font-semibold";

  const arrow = `animate-bounce relative clear-both h-[50px] tablet:h-[30px] ml-[5%] inline smtablet:h-[20px]`;

  const list = `text-[80%] inline`;

  const checkMarkOrange = `h-[40px] inline mb-[.5%] mr-[1%]`;

  const items = "inline";

  const uscfLink = `text-blueNice !important`;
  const textAbout = "text-textGray text-[60%] font-light";
  const [popDisplay, displayS] = useState(
    `opacity-100 fixed laptop:text-[200%] tablet:ml-[30%] tablet:mr-[30%] text-white bg-darkBlue phone:ml-[20%] phone:mr-[20%] phone:mt-[50%] phone:w-[60%] fixed mt-[20%] block p-[20px] ml-[26%] mr-[26%] border-white border-[1px] z-50 text-center smtablet:mt-[25%]`
  );

  const popUp = `${popDisplay}`;
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />

      <body style={{ backgroundColor: "#171717" }}>
        <img
          className={brownB}
          src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php0YZEz8.png"
        />
        <Navbar
          borderOne="decoration-4"
          borderTwo="decoration-2"
          borderThree="decoration-2"
        />
        <div className={popUp}>
          Want a head start on your chess journey?<br></br>
          <a
            href="https://new.uschess.org/join-us-chess"
            target="_blank"
            className={uscfLink}
          >
            Click here to become a member of USCF today!
          </a>
          <br></br>
          <button
            onClick={() => {
              var tran = 2000;
              setZ(z + 1);
              setTwo(
                `transition duration-[${tran}ms] opacity-100 z-30 text-[450%] font-bold bg-blackGood h-screen text-white phone:h-[1px] tablet:h-[1px] smtablet:h-[1px]`
              );
              setO(
                `phone:h-[400px] transition duration-[${tran}ms] opacity-100 z-20 object-contain justify-center bg-gradient-to-tr from-darkvi via-30% via-darkpurp via-lightorange via-80%  to-yell flex flex-wrap tablet:h-[600px] smtablet:h-[400px] laptop:h-screen`
              );
              displayS(
                "fixed laptop:text-[200%] tablet:ml-[30%] tablet:mr-[30%] text-white bg-blackGood phone:ml-[20%] phone:mr-[20%] phone:mt-[50%] phone:w-[60%] fixed mt-[20%] block p-[20px] ml-[26%] mr-[26%] rounded-[10px] border-white border-[5px] z-50 text-center smtablet:mt-[25%] transition-all duration-[${tran}ms] opacity-0 duration-[1000ms] mt-[35%]"
              );
              setBoard(
                `absolute w-[25%] phone:hidden tablet:w-[22%]ml-[80%] z-30 laptop:mt-[10%] smtablet:mt-[10%] tablet:mt-[27%] ml-[75%] transition duration-[${tran}ms] opacity-100`
              );
            }}
            className="text-rose-500"
          >
            CLOSE
          </button>
          {/* <p>{z}</p> */}
        </div>
        <div className={setTop}>
          <img
            className={chessBoardTopImage}
            src="https://i0.wp.com/jkcreativewood.com/wp-content/uploads/2016/12/XL-CHESS-SET-DETAIL-scaled.jpg?fit=2560%2C2560&ssl=1"
            alt="Image Not Loading"
          />

          <div className={greeting}>
            Welcome to the Marlboro Chess Club!
            <p className={miniText}>By Akshat Tewari and Rakesh Chandwani</p>
          </div>
          <div className={ourStory}>
            Scroll Down to See Our Story!
            <img
              src="https://tristatesound.com/wp-content/uploads/2014/12/867-arrow-pointing-down-inside-a-circle-outline-icon.png"
              alt="arrow down"
              className={arrow}
            />
          </div>
        </div>
        <div className={sectionTwo}>
          <div className="text-center">
            <img
              className={purpleBoard}
              src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php4iTiRt.png"
              alt="image not loading?"
            />
            <article className={storyHeader}>
              Our Story
              <img
                src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/phpgYYEcB.png"
                alt="Image not loading"
                className="ml-[1%] inline w-[5%] underline underline-offset-[20px] phone:h-[50px] phone:w-[50px] decoration-8 decoration-wavy decoration-lightorange"
              />
            </article>
            <div className="text-[90%] phone:ml-[5%] phone:w-[90%] phone:mr-[5%] smtablet:text-[70%] smtablet:w-[55%] smtablet:ml-[40%] rounded-md bg-gradient-to-r from-purple-500 to-lightorange p-1 w-[50%] tablet:w-[60%] overflow-auto mt-[10%] ml-[45%] tablet:ml-[35%] h-fit tablet:mb-[5%]">
              <div className="flex bg-blackGood  overflow-auto text-left h-full">
                <article className="text-[35%] font-nunito bg-gradient-to-r from-purple-500 to-lightorange bg-clip-text p-[5%] block w-[100%] overflow-auto">
                  <p className="align-center justify-center text-[110%] text-white mt-[3%]">
                    Marlboro Chess Club
                  </p>
                  <p className={textAbout}>
                    As a chess club, we started virtually as the pandemic
                    commenced. Some kids wanted to make an official chess club
                    as opposed to our virtual meetings after school ended. After
                    the pandemic started to slow down and people were going back
                    to in-person school, we decided to make an in-person club!
                    We have been thriving ever since!
                  </p>
                  <p className="align-center justify-center text-[110%] text-white mt-[3%]">
                    Sign up Now for Specialized Perks!
                  </p>
                  <ol className={list}>
                    <li>
                      <img
                        src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php973UOe.png"
                        alt="image not loading"
                        className={checkMarkOrange}
                      />
                      Personalized Training Plans that Suit You
                    </li>
                    <img
                      src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php973UOe.png"
                      alt="image not loading"
                      className={checkMarkOrange}
                    />
                    <li className={items}>1 hour lessons for $15</li>
                    <br></br>
                    <img
                      src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php973UOe.png"
                      alt="image not loading"
                      className={checkMarkOrange}
                    />
                    <li className={items}>
                      A like minded and competitive community
                    </li>
                  </ol>
                </article>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
