import React from 'react';
import kiaSoulKult from '../assets';

const Header = () => {
    return (
        <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
                <div>
                    <img className="w-28" src={kiaSoulKult} alt="logo"/>
                </div>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Pages</li>
                    <li>Shop</li>
                    <li>Element</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    );
}
export default Header; // Exported