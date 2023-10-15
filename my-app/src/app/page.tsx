"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Features from "./components/Features";


export default function Home() {
  return (
    <main className="antialiased bg-[#f6ecfe]">
      <header className = "container">
        <Navbar />
        <div className="text-center h-[95vh] pt-64">
          <h1 className="text-6xl font-bold tracking-tight">A tool to stop scammers permanently!</h1>
          <h2 className="text-2xl text-purple-600 tracking-wide mt-4">Created in Flask with Whisper and using ChatGPT, we will let you know if it is a scam call</h2>
          <button className="transition-colors mt-10 bg-white border-purple-600 border-2 p-5 rounded-xl font-bold w-52 hover:bg-purple-600 hover:bg-opacity-70 hover:text-white">View demo</button>
        </div>
      </header>
      <Features />
      <div className="bg[#ebd2fe] text-center pt-10 content-center mx-auto pb-10">
        <h1 className="text-4xl font-bold tracking-tight">How to use</h1>
        <div className="flex flex-row mx-auto content-center margin-10 mt-10 ">
          <div className="w-96 bg-purple-200 rounded-3xl ml-20 grow p-10 border-b-2 border-purple-600 hover:border-2 transition-all" >
            <h1 className="text-2xl">Load the page</h1>
            <p>Just load the page</p>
            <img src = {"work.svg"}></img>
          </div>
          <div className="w-96 bg-purple-200 ml-20 grow p-10 rounded-3xl border-b-2 border-purple-600 hover:border-2 transition-all">
            <h1 className="text-2xl">Press the record button</h1>
            <p>Click on the button that says record</p>
            <img src = {"mic.svg"}></img>
          </div>
          <div className="w-96 bg-purple-200 rounded-3xl mr-20 ml-20 grow p-10 border-b-2 border-purple-600 hover:border-2 transition-all">
            <h1 className="text-2xl">Check the what the Ai says</h1>
            <p>Make sure to carefully read</p>
            <img src = {"searching-location-on-the-phone.svg"}></img>
          </div>
        </div> 
      </div>
    </main>
  );
}
