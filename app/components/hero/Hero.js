"use client";
import React from 'react'
import Image from 'next/image';
import mainimage from "@/public/banner/1.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
       <div className='bg-sky-950 bg-opacity-90'>
       <div className="py-12 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-5xl text-center">

        <h1 className="sm:text-5xl text-3xl mt-5 text-center bg-green-500 font-bold p-2">ALL INDIA YOUTH DEVELOPMENT PARTY</h1>
        <h1 className="sm:text-5xl text-3xl  text-center bg-yellow-200 font-bold p-2" style={{lineHeight: '55px'}}>அகில இந்திய இளைஞர்கள் முன்னேற்ற கட்சி</h1>
      
        <p className="text-center text-xl mt-6 text-white italic">"இன்றைய இளைஞர்கள் இந்தியாவின் வருங்கால தூண்கள்".</p>

      
      <button type="button" className="btn-outline-primary bg-white transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-green-700 text-green-700 hover:text-white font-semibold py-2 px-4 rounded mt-8 text-lg items-center inline-flex " onClick={() => (window.location.href = "/registerpage")} ><span className='pr-2'>Register/உறுப்பினராக</span><FaArrowRightLong/></button>
        </div>
        <div className="mt-16 flow-root sm:mt-16">
            <div
                className="-m-2 rounded-sm bg-white p-2 ring-1 ring-inset ring-gray-900/10 lg:mx-72 -mt-10 lg:rounded-sm lg:p-4">
                
                <Image src={mainimage} className="rounded-sm shadow-2xl ring-1 ring-gray-900/10" alt='main image' />
            </div>
        </div>
    </div>
</div>
       </div>
  )
}

export default Hero



