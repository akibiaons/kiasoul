import React from "react";

const Banner = () => {
    const data = [
        "https://www.prnewswire.com/news-releases/kia-motors-americas-music-loving-hamsters-shuffle-to-lmfaos-smash-hit-party-rock-anthem-in-new-advertising-campaign-for-funky-soul-urban-passenger-vehicle-128452523.html#",/*Images will go here...*/
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.autobytel.com%2Fkia%2Fsoul%2F2015%2Fnews%2Ffully-charged-ad-campaign-launches-for-2015-kia-soul-ev-125513%2F&psig=AOvVaw0_otaUV-fpSs6Nb-3y5JH8&ust=1682999798708000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCXhf2c0_4CFQAAAAAdAAAAABBf",
        "https://www.prnewswire.com/news-releases/kia-motors-americas-music-loving-hamsters-shuffle-to-lmfaos-smash-hit-party-rock-anthem-in-new-advertising-campaign-for-funky-soul-urban-passenger-vehicle-128452523.html#",
    ];
    return (
        <div className="w-full h-auto">
            <div>
                <div>
                    <img src={data[0]} alt="ImgOne"/>
                </div>
            </div>
        </div>
    );
};

export default Banner;