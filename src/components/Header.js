import React from 'react';
import {kiaSoulKult, cartImg} from "../assets/index";

const Header = () => {
    return (
        <div className="w-full h-34 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img className="w-28" src={kiaSoulKult} alt="logo"/>
                </div>
                <div className="flex items-center gap-8 relative">
                <ul className="flex item-center gap-8">
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Home</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Pages</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Shop</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Element</li>
                    <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">Blog</li>
                </ul>
                <div className="relative">
                    <img className="w-12" src={cartImg} alt="shoppingBag"></img>
                    <span className="absolute w-6 top-2 left-0 text-sm flex items-senter justify-center font-semibold font-titleFont">0
                    </span>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Header; // Exported