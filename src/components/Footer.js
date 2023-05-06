import React from 'react'
import {kiaSoulKult, cartImg} from "../assets/index";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto">
            {/* ======== LogoIcon Start here ============ */}
            <div className="flex flex-col gap-7"> {/* This <div> wil have footer logo which is light to contrast with dark-bg*/}
                <img className="w-32" src={kiaSoulKult} alt="logoLightGoesHere"/>
                <p className="text-white text-sm tracking-wide">ReactBD.com</p>
                <img className="w-56" src="" alt="paymentLogoGoesHere"/>
            </div>
            {/* ======== LogoIcon End here ============ */}
            {/* ======== LocateUs Start here ========== */}
            {/* ======== LocateUs End here ========== */}
            {/* ======== Profile Start here ========== */}
            {/* ======== Profile End here ========== */}
            {/* ======== Subscribe Start here ========== */}
            {/*========= Subscribe End here ==========*/}
        </div>
    </div>
  )
}

export default Footer;