'use client'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <body>
    <header className = "flex flex-row md:flex-col mt-0 bg-slate-900 p-4 text-white text-[150%] ">
        <Link href = "/aboutus" className = "text-white ml-[2%] font-sans hover:text-slate-400 transition-all duration-[500ms] md:text-center">About Us </Link>
        <Link href = "/membership" className = "text-white ml-[5%] md:ml-[2%] font-sans hover:text-slate-400 transition-all duration-[500ms] md:text-center">Membership</Link>
        <Link href = "/tournaments" className = "text-white ml-[5%] md:ml-[2%] font-sans hover:text-slate-400 transition-all duration-[500ms] md:text-center">Classes & Tournaments</Link>
      </header>
    <div  className = "mt-0 bg-cover bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpVmOHiw.png')]" >
 <div className = "px-10">
    <h1 className = " block align-middle text-[500%] text-white  font-sans text-center outline-none h-screen items-center justify-center hover:text-slate-300 transition-all duration-[500ms]">Welcome to the Marlboro Chess Club! <p className = " text-[35%]"> by Akshat Tewari and Rakesh Chandwani</p></h1>
    <div className = "flex flex-row ">
      <article className = "text-[200%] text-white border-4 border-indigo-500/75 rounded outline-none h-screen items-center justify-center ">Sign up for Classes Today!</article>
    </div>
 </div>
    </div>
    </body>
</>
  )
}