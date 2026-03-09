/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import {
  FaCodeBranch,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import image1 from "../../public/images/WhatsApp_Image_2024-08-05_at_03.20.56_95cc1b03-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-24 pb-6 ">
      <footer className="footer text-white p-10">
        <div>
          <h1 className="text-[25px] font-bold">Tech bee</h1>
          <h1 className="text-[20px] font-bold">
            Empower Your Business to Thrive
          </h1>
          <button className="p-4 mt-4 pl-2 bg-gradient-to-r from-[#a54ce0] to-[#a54ce0] border-none rounded-md text-[18px] text-white font-bold transition-all duration-300  ">
            <Link href="contact-us" className="pt-2">
              Let's Connect
            </Link>
          </button>
        </div>

        <nav className="font-semibold text-[16px]">
          <h6 className="font-bold text-white text-[18px]">Services</h6>
          <a className="link link-hover text-white">Website development</a>
          <a className="link link-hover text-white">App development</a>
          <a className="link link-hover text-white">Digital marketing</a>
          <a className="link link-hover text-white">video making</a>
        </nav>
        <nav className="font-semibold text-[16px] text-white">
          <h6 className="font-bold text-white text-[18px]">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="font-semibold text-[16px]">Address</h6>
          <p className="text-[20px]"> 2510 164th St Apt F207,</p>
          <p className="text-[20px]">
            {" "}
            Lynnwood, Washington 98087, United States.
          </p>
          <h6 className="font-semibold text-[16px] pt-2">Number:</h6>
          <p className="text-[20px]">+1 (425) 548-4872 </p>
        </nav>
      </footer>
      <div className="flex justify-between p-2 mt-4">
        <div>
          <h4>Copyright©techbee$2025 </h4>
        </div>
        <div className="flex gap-2">
          <Link href="https://www.facebook.com/clothingsbeeuk/">
            <FaFacebookSquare className="text-3xl " />
          </Link>
          <Link href="http://instagram.com/clothingsbeeuk/">
            <FaInstagram className="text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
