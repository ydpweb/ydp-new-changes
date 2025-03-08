import React from 'react'
import Image from 'next/image'
import ydp from '@/public/ydp.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { IoCallSharp} from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-emerald-800 to-gray-800 pt-12 pb-6 px-10 tracking-wide">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-6">
          <div className=" lg:items-center">
              <Image src={ydp} width={144} alt='logo' className='w-60 -mb-5 -mt-10'/>
              <p className='text-gray-300 mb-5'>All India Youth Development Party</p>
          </div>

          <div>

          <h4 className="text-lg mb-6 text-gray-200">CONTACT DETAILS</h4>

          <div className="lg:flex lg:items-center mb-5">
            <ul className="flex space-x-6">
              <li>
                <a href="https://www.facebook.com/tamalaiydprvenkatesan.tamalaiydprvenkatesan?mibextid=ZbWKwL" target="_blank">
                <FaFacebookSquare className="text-2xl text-sky-500 hover:text-white"/>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/aiydpleader?igsh=eXUzMTg1eTE1eHN2" target="_blank">
                  <FaInstagram className="text-2xl text-fuchsia-500 hover:text-white"/>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919025228598" target="_blank">
                  <SiWhatsapp className="text-2xl text-lime-400 hover:text-white"/>
                </a>
              </li>
            </ul>
          </div>
           
           <div className='mb-5'>
          <a href="tel:9025228598">
             <p className="inline-flex text-gray-300 mb-3 hover:text-white ">
             <IoCallSharp className="mr-1 mt-0.2 text-lg"/>
             +91 902 522 8598
             </p>
            </a>
             <br/>
            <a href="mailto:ydpweb2021@gmail.com">
            <p className="inline-flex text-gray-300 hover:text-white "> 
            <IoMailOutline className="mr-1 mt-0.5 text-lg"/>aiydpambur@gmail.com
            </p>
            </a>
            </div>

            </div>

          <div className='mr-8 mb-5'>
          <h4 className="text-lg mb-6 text-gray-200">ADDRESS</h4>
            <address className="text-gray-300">
            <p className='not-italic inline-flex' >AIYDP - Head office No: 4/286, Kallipuram vattam, Vellakuttai village, Vaniyambadi (Tk), Tirupattur(Dt), Tamilnadu - 635752.</p>
            </address>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-gray-200">பயனுள்ள இணைப்புகள்</h4>
            <ul className="space-y-4 ">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white text-sm">கட்சி தகவல்</a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-white text-sm">கட்சி புகைப்படம்</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white text-sm">கட்சி தொடர்பு விவரம்</a>
              </li>
              <li>
                <a href="/donate" className="text-gray-300 hover:text-white text-sm">கட்சி நிதி உதவி
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className='text-gray-300 text-xs mt-5'>for websites & webapps contact @ JAI - 8610636851
        </p>
          <hr/>
        <p className='text-gray-300 text-sm mt-5'>© AIYDP. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer