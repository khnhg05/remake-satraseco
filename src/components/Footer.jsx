import React from "react";
import { FOOTER_INFO } from "@/constants/labels";

export default function Footer() {
  return (
    <div className="Footer p-20 flex flex-row gap-10 border-t-2 border-gray-300">
      <div className="FooterLogo w-1/2">
        <img 
            src={FOOTER_INFO.img} 
            alt="satraseco"
            className="w-full h-auto"
        ></img>
      </div>

      <div className="FooterInfo flex flex-col justify-center w-1/3 gap-3">
        <p className="text-2xl text-gray-400 font-semibold"> {FOOTER_INFO.contact} </p>
        <div className="gap-6 text-xl text-gray-400 ">
            <p> {FOOTER_INFO.address} </p>
            <p> {FOOTER_INFO.phone} </p>
            <p> {FOOTER_INFO.email} </p>
        </div>
      </div>
      
      <div className="FooterMaps w-1/3 h-auto">
        <iframe src={FOOTER_INFO.maps}></iframe>
      </div>
    </div>
  );
}
