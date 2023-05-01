import React from "react";

const Banner = () => {
    const data = [
        "src/assets/img-0.jpeg",
        "src/assets/img-1.png",
        "src/assets/img-2.png",
    ];
    return (
        <div className="w-full h-auto">
            <div>
                <div>
                    <img
                    className="w-screen h-full object-cover"
                    src={data[0]} 
                    alt="deals!"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;