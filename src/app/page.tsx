'use client'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <body className = "relative">
    <header className = "flex flex-row md:flex-col mt-0 bg-slate-900 p-4 text-white text-[150%] ">
        <Link href = "/aboutus" className = "text-white ml-[2%] font-sans hover:text-slate-400 transition-all duration-[500ms] md:text-center">About Us </Link>
        <Link href = "/membership" className = "text-white ml-[5%] md:ml-[2%] font-sans hover:text-slate-400 transition-all duration-[500ms] md:text-center">Membership</Link>
        <Link href = "/tournaments" className = "text-white ml-[5%] md:ml-[2%] font-sans hover:text-slate-400 transition-all duration-[500ms] md:text-center">Classes & Tournaments</Link>
      </header>
    <div  className = "mt-0 relative bg-cover bg-center h-screen bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpVmOHiw.png')]" >
 <div className = "px-10">
    <h1 className = " align-middle text-[500%] text-white  font-sans text-center items-center justify-center">Welcome to the Marlboro Chess Club! <p className = " text-[35%]"> by Akshat Tewari and Rakesh Chandwani</p></h1>
    </div>
    <div className = "flex flex-row p-0 align-middle relative object-left-top">
      <article className = "text-[200%] ml-[5%] relative mb-[10%] center text-white border-4 border-indigo-500/75 rounded outline-none p-3 px-5">Sign up for Classes Today!</article>
    
 </div>
    </div>
    </body>
</>
  )
}