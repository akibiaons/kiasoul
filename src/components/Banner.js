import React from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        "https://raw.githubusercontent.com/akibiaons/kiasoul/main/src/assets/img-0.jpeg",
        "https://raw.githubusercontent.com/akibiaons/kiasoul/main/src/assets/img-1.png",
        "https://raw.githubusercontent.com/akibiaons/kiasoul/main/src/assets/img-2.png",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="w-full h-auto overflow-x-hidden">
            <div className="w-screen h-[650px] relative">
                <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[400vw] h-full flex">
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
                    />
                    <img
                    className="w-screen h-full object-cover"
                    src={data[2]} 
                    alt="ImgThree"
                    />
                </div>
                {/*below are the arrows for the home page img carosel*/}
                <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
                    <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                        <HiArrowLeft />
                    </div>
                    <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300">
                        <HiArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;