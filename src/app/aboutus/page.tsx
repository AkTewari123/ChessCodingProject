'use client'
import Link from "next/link"

export default function Home() {
  return (
    <>
    <body>
    <div  className = "mt-0 bg-cover bg-[url('https://media.istockphoto.com/id/1320344675/photo/huge-chess-pieces-within-an-ornate-old-building.webp?b=1&s=170667a&w=0&k=20&c=nVAQo3fTN0e_5o58MQ_3fRUwvND1O85Favef4VLNSNA=')]" >
      <header className = "mt-0">
        <Link href = "/" className = "mt-4 text-[200%] text-blue-200 px-8 hover:text-blue-400 hover:text-[250%] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ">Home </Link>
        <Link href = "/membership" className = "mt-4 text-[200%] text-blue-200 px-8 hover:text-blue-400 hover:text-[250%] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ">Membership</Link>
        <Link href = "/tournaments" className = "text-[200%] text-blue-200 px-8 hover:text-blue-400 hover:text-[250%] hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ">Classes & Tournaments</Link>
      </header>
      
   <div className = "text-white ">

   <h1 className = "mt-[10%] block align-middle text-[500%] text-blue-200 font-sans text-center outline-none items-center justify-center">Who Are We? <p className = "m-[4%] mt-[1%] text-[25%]">It all started in 2021 when 
   we were holed in our homes trying to survive the pandemic. Some of us got together and started playing Chess online. 
   The time we spent on playing chess filled us with a lot of fun and togetherness 
   even though we were just sitting in our living rooms in isolation. Chess binds you, it very soon took shape of a small community of players on internet and then we decided, let’s form a club.

Some of us are interested in coaching young minds and some are just interested in playing, and we do all things chess. We conduct our games in each others homes, online on chess 
app and the coaching classes are conducted by the coaches who have a passion of teaching.

Join us to bring chess into your lives or just meet with others who love this game of strategy and fun.</p></h1>

    
    </div>
    <div className = " h-screen bg-[url('https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]">
      <p className="text-[250%]" >Meet Akshat Tewari</p>
      <img className="float-right" src="https://images.unsplash.com/photo-1543092587-d8b8feaf362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"></img>
    </div>
    </div>
    </body>
</>
  )
}