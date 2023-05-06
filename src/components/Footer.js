import React from 'react'
import {kiaSoulKult, cartImg} from "../assets/index";
import { ImGithub } from "react-icons/im";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto grid grid-cols-4">
            {/* ======== LogoIcon Start here ============ */}
            <div className="flex flex-col gap-7"> {/* This <div> wil have footer logo which is light to contrast with dark-bg*/}
                <img className="w-32" src={kiaSoulKult} alt="logoLightGoesHere"/>
                <p className="text-white text-sm tracking-wide">ReactBD.com</p>
                <img className="w-56" src="" alt="paymentLogoGoesHere"/>
                <div className="flex gap-5 text-lg text-gray-400">
                    <ImGithub className="hover:text-white duration-300 cursor-pointer" />
                    <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                    <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
                    <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                    <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                </div>
            </div>
            {/* ======== LogoIcon End here ============ */}     
            {/* ======== LocateUs Start here ========== */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Locate us!</h2>
                <div className="text-base flex flex-col gap-2">
                    <p>MBD, Ruwi, Muscat-Oman</p>
                    <p>Mobile: 00968 9785962</p>
                    <p>Phone: 00968 24769821</p>
                    <p>E-Mail: support@kiasoulkult.com</p>
                </div>
            </div>
            {/* ======== LocateUs End here ========== */}
            {/* ======== Profile Start here ========== */}
            <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
                <p>
                    <span>
                        <BsPersonFill />
                    </span>{""}
                    My account
                </p>
                <p></p>
            </div>
            {/* ======== Profile End here ========== */}
            {/* ======== Subscribe Start here ========== */}
            {/*========= Subscribe End here ==========*/}
        </div>
    </div>
  )
}

export default Footer;