"use client";
import React, { useState, useEffect } from 'react';
import {
    FIND_OUT_MORE,
    SERVICE_INFO,
    SERVICE_INFO_LIST
} from '../constants/labels';

export default function ServiceInfo() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = SERVICE_INFO_LIST.length;

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 1000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="ServiceInfo py-16 flex flex-col items-center justify-center bg-gray-50">
            <div className="ServiceInfoIntroduction text-center max-w-4xl mx-auto px-4 mb-12">
                <h2 className="text-[#011E56] text-4xl font-semibold mb-4">{SERVICE_INFO.title}</h2>
                <p className="text-lg text-gray-600">{SERVICE_INFO.description}</p>
            </div>

            <div className="flex flex-row mx-30">
                <div className="flex flex-col items-center">
                    {SERVICE_INFO_LIST.map((item) => (
                        <div 
                            key={item.id} 
                            className={`ServiceInfoItemContent flex flex-col w-[75%] py-5 pl-5 text-black cursor-pointer ${currentSlide === item.id - 1 ? "border-l-4 border-red-500" : "border-l-4 border-gray-300"}`}
                        >
                            <p className="text-2xl font-bold text-[#011E56]">{item.title}</p>
                            <p className="text-gray-700">{item.description}</p>
                      text-left      <p className="text-red-500 text-red hover:text-red-700 underline">
                                {FIND_OUT_MORE}
                            </p>
                        </div>
                    ))}
                </div>
                
                <img 
                    src={SERVICE_INFO_LIST[currentSlide].img} 
                    alt={SERVICE_INFO_LIST.title} 
                    className="w-[40vw] h-auto rounded-lg" 
                /> 
                
            </div>
        </div>
    );
}