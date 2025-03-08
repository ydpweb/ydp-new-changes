"use client";

import React from "react";
import "./Header.css";
import Image from "next/image";
import Link from "next/link";
import ydp from "@/public/ydp.png";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri"

const Header = () => {
  return (
    <div>
      <nav>
        <div className="wrapper">
          <div className="logo">
          <Link href="/" legacyBehavior>
            <a>
              <Image src={ydp} width={180} alt="logo" />
            </a>
          </Link>
          </div>
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label htmlFor="close-btn" className="btn close-btn">
             <FaXmark />
            </label>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
            <a href="/gallery">Gallery</a> 
            </li>
            <li>
            <a href="/contact">Contact</a> 
            </li>
            <li>
              <button type="button" className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline hover:bg-red-500 text-red-500 hover:text-white font-semibold py-2 px-4 rounded text-sm items-center inline-flex " style={{margin: "0 10px"}} onClick={() => (window.location.href = "/donate")}><span className='pr-2'>Donate</span><RiMoneyRupeeCircleFill/></button>
            </li>
            <li>
              <button type="button" className="btn-outline-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border-2 border-green-700 hover:bg-green-700 text-green-700 hover:text-white font-semibold py-2 px-4 rounded text-lg items-center inline-flex " style={{margin: "0 10px"}} onClick={() => (window.location.href = "/registerpage")}><span className='pr-2'>Register</span><FaArrowRightLong/></button>
            </li>
          </ul>
          <label htmlFor="menu-btn" className="btn menu-btn">
            <FaBars />
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Header;
