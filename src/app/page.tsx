'use client'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <body>
    <div  className = "mt-0 bg-cover bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/toNirvana-00Z/phpAGMF1q.jpeg')]" >
      <header className = "mt-0">
        <Link href = "/aboutus" className = "mt-4 text-[200%] text-blue-200 px-8 hover:text-blue-400 hover:text-[250%] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ">About Us</Link>
        <Link href = "/membership" className = "mt-4 text-[200%] text-blue-200 px-8 hover:text-blue-400 hover:text-[250%] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ">Membership</Link>
        <Link href = "/tournaments" className = "text-[200%] text-blue-200 px-8 hover:text-blue-400 hover:text-[250%] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ">Classes & Tournaments</Link>
      </header>
 <div className = "px-10">
    <h1 className = "mt-[15%] block align-middle text-[500%] text-blue-200 font-sans text-center outline-none h-screen items-center justify-center">Welcome to the Marlboro Chess Club! <p className = " text-[35%]"> by Akshat Tewari and Rakesh Chandwani</p></h1>

 </div>
    </div>
    </body>
</>
  )
}