'use client'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <body>
    <div  className = "mt-0 bg-cover bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/toNirvana-00Z/phpAGMF1q.jpeg')]" >
      <header className = "mt-0">
        <Link href = "/aboutus" className = "mt-4 text-[200%] text-blue-200 px-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] no-underline hover:underline decoration-indigo-500 transition duration-1000 ">About Us</Link>
        <Link href = "/membership" className = "text-[200%] text-blue-200 px-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] stroke-black">Membership</Link>
        <Link href = "/tournaments" className = "text-[200%] text-blue-200 px-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] stroke-black">Classes & Tournaments</Link>
      </header>

    <h1 className = "align-middle text-[500%] text-blue-200 font-sans text-center outline-none h-screen flex items-center justify-center">Welcome to the Marlboro Chess Club! </h1>
    
    </div>
    <div>
      <h1 className = "mt-4 text-[200%] text-blue-200 px-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Why Should I Register Today?</h1>
    </div>
    </body>
</>
  )
}