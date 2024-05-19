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

  const [opacity, setO] = useState(50);
  const sectionTwo = `z-30 text-[450%] font-bold bg-blackGood h-screen text-white opacity-${opacity}`;

  const brownBoard = "absolute w-[25%] z-0 mt-[10%] ml-[75%]";

  var chessBoardHeight = 50;
  var [z, setZ] = useState(0);

  var chessBoardWidth = chessBoardHeight / 2;

  const purpleBoard = `z-20 align-middle absolute w-[25%] mt-[-3%]`;

  const chessBoardTopImage = `z-20 text-white rounded-[50px] border-[3px] absolute mt-[15%] mr-[65%] h-[${chessBoardHeight}%] w-[${chessBoardWidth}%] object-fill flex-auto`;

  const backgroundTop = `opacity-${opacity} z-20 object-contain justify-center bg-gradient-to-tr from-darkvi via-30% via-darkpurp via-lightorange via-80%  to-yell h-[500px] flex flex-wrap h-screen`;

  const miniText = `z-20 text-white text-[16px]`;

  const greeting = `z-20 text-white text-[300%] w-[40%] text-center mt-[6%] font-bold`;

  /* const bodyC = "font-nunito text-white bg-blackGood"; */

  const storyHeader = `underline underline-offset-[20px] decoration-8 decoration-wavy decoration-lightorange`;

  const ourStory =
    "w-[35%] align-center bg-black bg-opacity-70 mt-[30%] text-[250%] p-[2%] absolute rounded-[30px] text-center text-white font-semibold";

  const arrow = `animate-bounce relative clear-both h-[50px] ml-[5%] inline`;

  const list = `text-[80%] inline`;

  const checkMarkOrange = `h-[40px] inline mb-[.5%] mr-[1%]`;

  const items = "inline";

  const uscfLink = `text-blueNice !important`;
  const textAbout = "text-textGray text-[60%] font-light";
  const [popDisplay, displayS] = useState(`opacity-100 brightness-200 fixed text-white bg-blackGood fixed mt-[20%] block p-[20px] rounded-[5px] border-white border-[5px] z-50`);

  const popUp =`${popDisplay}`;
  function createPopup() {
    // Create the popup elements
    const popup = document.createElement("body");
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.padding = "20px";
    popup.style.backgroundColor = "#171717";
    popup.style.border = "5px solid white";
    popup.style.borderRadius = "5px";
    popup.style.zIndex = "1000";
    popup.style.color = "white";
    popup.style.opacity = "100";
    const message = document.createElement("p");
    message.innerText = "Don't know where to start?\n";
    popup.appendChild(message);
    const link = document.createElement("a");
    link.href = "https://new.uschess.org/join-us-chess";
    link.textContent = "Click here to become a member of USCF today!";
    link.style.color = "#007FFF";
    link.target = "_blank";
    popup.appendChild(link);
    const buffer = document.createElement("p");
    buffer.innerText = "";
    popup.appendChild(buffer);

    const closeButton = document.createElement("button");
    closeButton.innerText = "CLOSE";
    closeButton.addEventListener("click", () => {
      popup.style.display = "none";
      document.body.removeChild(popup);
      console.log("this is running");
      setO(100);
      displayS("hidden");
    });
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);
  }
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
        rel="stylesheet"
      />
      <body style={{ backgroundColor: "#171717" }}>
        <div className={backgroundTop}>
          <Navbar
            borderOne="decoration-4"
            borderTwo="decoration-2"
            borderThree="decoration-2"
          />
          <div className={popUp}>
            Don't know where to start?<br></br>
            <a
              href="https://new.uschess.org/join-us-chess"
              target="_blank"
              className={uscfLink}
            >
              Click here to become a member of USCF today!
            </a>
            <br></br>
            <button
              onClick={ () => {
                setZ(z+1)
                setO(100)
                displayS("hidden")

              }}
            >
              CLOSE
            </button>
            {/* <p>{z}</p> */}
          </div>
          <img
            className={chessBoardTopImage}
            src="https://i0.wp.com/jkcreativewood.com/wp-content/uploads/2016/12/XL-CHESS-SET-DETAIL-scaled.jpg?fit=2560%2C2560&ssl=1"
            alt="Image Not Loading"
          />
          <img
            className={brownBoard}
            src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/php0YZEz8.png"
          />
          <div className={greeting}>
            Welcome to the Marlboro Chess Club !
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
                className="ml-[1%] inline w-[5%] underline underline-offset-[20px] decoration-8 decoration-wavy decoration-lightorange"
              />
            </article>
            <div className="text-[90%] rounded-md bg-gradient-to-r from-purple-500 to-lightorange p-1 w-[50%] overflow-auto mt-[10%] ml-[35%] h-fit">
              <div className="flex bg-blackGood  overflow-auto text-left h-full">
                <article className="text-[35%] font-nunito bg-gradient-to-r from-purple-500 to-lightorange inline-block bg-clip-text p-[5%] block w-[100%] overflow-auto">
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
