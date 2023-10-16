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
    <div  className = "mt-0 relative bg-cover bg-center h-[30%] py-[5%] bg-[url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpVmOHiw.png')]" >
 <div className = "px-10">
    <h1 className = " align-middle text-[500%] text-white  font-sans text-center items-center justify-center">Welcome to the Marlboro Chess Club! <p className = " text-[35%]"> by Akshat Tewari and Rakesh Chandwani</p></h1>
    </div>
    </div>
    <div className = "h-100 bg-black bg-cover">
    <div className="flex flex-row">
  <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 w-[20%] overflow-auto">
    <div className="flex bg-black overflow-scroll">
      <article className="text-[150%] font-sans text-white p-2 block align-center text-center">Sign up Right Now!<p className = "align-center text-center justify-center">fdl;ahglasdkgljf;lawhgk;dsjgkl;adshg;dsakl;gha;slfdska;lfhas;lk;a</p></article>
    </div>
  </div>
</div>
</div>
    </body>
    
</>
  )
}