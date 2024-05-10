import Link from "next/link";
import * as React from "react";
import {
  useState,
  useEffect,
  ChangeEvent,
  SyntheticEvent,
  UIEvent,
} from "react";
type NavbarPropsType = { color: string; children?: any };
const Navbar = (props: NavbarPropsType) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState("");
  const headImage = `z-20 absolute h-[100%] float-left mr-[90%] `;
  const otherHeaders =
    `z-20 ${props.color} text-[150%] font-nunito  ml-[4%] p-[15px] underline decoration-2 underline-offset-8 border-white `;
  const z = "";
  console.log(otherHeaders)
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
  const header = `${y} text-center h-[8%] fixed z-30 place-content-center font-semibold justify-center p-[1] flex flex-row  w-[100%]`;
  const aboutUsHeader =
    "z-20 text-white text-[150%] w-[140px] font-nunito p-[15px] underline decoration-4 underline-offset-8 border-white";
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

      <Link href="/tournaments" className={otherHeaders}>
        Classes
      </Link>

      <Link href="/membership" className={otherHeaders}>
        Membership
      </Link>
    </header>
  );
};
export default Navbar;
