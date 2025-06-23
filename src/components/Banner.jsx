import React from 'react';
import {
    BannerHeader,
    BannerDescription,
    BannerButton_Contact,
    BannerButton_Hightlight
} from '../constants/labels';

export default function Banner() {
    const bannerImage = '/images/Landing_Page_Hero.png';
    return (
        <div>
            <div className="BannerBackground relative">
                <img src={bannerImage} alt="Banner" className="w-full h-auto" />
            </div>

            <div className="BannerContent absolute inset-0 flex flex-col justify-center items-center text-white gap-6">
                <div className="BannerHeader text-7xl font-semibold text-center wrapped text-nowrap">
                    {BannerHeader}
                </div>

                <div className="BannerDescription text-2xl text-center text-wrap font-thin-300">
                    {BannerDescription}
                </div>
                
                <div className="BannerButtons flex flex-col text-xl gap-3">
                    <button className="RedButton cursor-pointer px-4 py-2 font-medium rounded-md bg-[#E52A25]">{BannerButton_Contact}</button>
                    <button className="WhiteButton cursor-pointer px-4 py-2 font-medium rounded-md bg-white text-black">{BannerButton_Hightlight}</button>
                </div>
            </div>
        </div>
    )
}