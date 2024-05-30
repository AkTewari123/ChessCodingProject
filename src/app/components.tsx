import Link from "next/link";
import * as React from "react";
import {
  useState,
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  UIEvent,
} from "react";
type NavbarPropsType = {
  borderOne?: string;
  borderTwo?: string;
  borderThree?: string;
  hildren?: any;
};
const Navbar = (props: NavbarPropsType) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState("");
  const headImage = `z-20 absolute h-[100%] float-left mr-[90%] phone:hidden`;
  const tournamentHeader = `z-20 text-white text-[120%] phone:text-[100%] font-nunito  ml-[4%] p-[20px] phone:p-[5px] underline ${props.borderTwo} underline-offset-8 border-white `;
  const classHeader = `z-20 text-white text-[120%] phone:text-[100%] font-nunito  ml-[4%] p-[20px] phone:p-[5px] underline ${props.borderThree} underline-offset-8 border-white `;
  const aboutUsHeader = `z-20 text-white text-[120%] phone:text-[100%] phone:ml-[4%] font-nunito p-[20px] phone:p-[5px] underline ${props.borderOne} underline-offset-8 border-white`;
  useEffect(() => {
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
  const header = `${y} text-center fixed z-30 place-content-center font-semibold justify-center flex flex-row phone:flex-col w-[100%] h-[60px] phone:h-[100px]`;
  return (
    <header className={header}>
      <img
        className={headImage}
        src="https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NOooooooYuo/phpr9TG5y.png"
        alt="Image Not Loading"
      />
      <Link href="/" className={aboutUsHeader}>
        About Us
      </Link>

      <Link href="/tournaments" className={tournamentHeader}>
        Classes
      </Link>

      <Link href="/membership" className={classHeader}>
        Membership
      </Link>
    </header>
  );
};
export default Navbar;

export function createPopup() {
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
    document.body.removeChild(popup);
  });
  popup.appendChild(closeButton);

  // Append the popup to the body
  document.body.appendChild(popup);
}
