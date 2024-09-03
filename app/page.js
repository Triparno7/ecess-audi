"use client"
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Events from "@/components/Events";
import {EventSection} from "@/components/EventSection";
export default function Home() {
  return (
      <>
    <div className="flex justify-center flex-col text-white font-sans h-[44vh] items-center gap-4">
      <div className="font-bold text-5xl">
      Welcome to ECE Students Society
      </div>
      <p>where you get a vibrant community to learn and interact!</p>
      <div>

      <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
      <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10 min-w-fit">
      
    </div>
    <div className="text-white">
      <div className="flex gap-12 justify-center items-center my-4 text-center flex-wrap">
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/creative-idea-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/construction-engineer-line-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/creative-idea-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/creative-idea-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10 min-w-fit">
      
    </div>
    <div className="text-white py-2">
      <h1 className="text-2xl font-bold text-center my-14 font-serif">Learn more about us</h1>
      <div className="flex gap-12 justify-center items-center my-4 text-center flex-wrap">
        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/creative-idea-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/construction-engineer-line-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/creative-idea-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>

        <div className="item space-y-3 bg-teal-200 rounded-3xl p-7 text-black flex justify-center flex-col items-center">
          <img className="" src="/creative-idea-icon.png"  width={88} alt="" />
          <p className="font-bold">Learn Industry related skills</p>
        </div>
      </div>
    </div>
    <Events/>
    <div className="flex items-center justify-center">

      <EventSection/>
    </div>
    
      </>
  );
}
