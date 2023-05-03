import React from "react";

const Banner = () => {
    const data = [
        'https://raw.githubusercontent.com/akibiaons/kiasoul/main/src/assets/img-0.jpeg',
        "https://raw.githubusercontent.com/akibiaons/kiasoul/main/src/assets/img-1.png",
        "https://raw.githubusercontent.com/akibiaons/kiasoul/main/src/assets/img-2.png",
    ];
    return (
        <div className="w-full h-auto">
            <div>
                <div className="w-[400vw h-full flex]">
                    <img
                    className="w-screen h-full object-cover"
                    src={data[0]} 
                    alt="ImgOne"
                    Loading="priority"
                    />
                    <img
                    className="w-screen h-full object-cover"
                    src={data[1]} 
                    alt="ImgTwo"
                    Loading="priority"
                    />
                    <img
                    className="w-screen h-full object-cover"
                    src={data[2]} 
                    alt="ImgThree"
                    Loading="priority"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;