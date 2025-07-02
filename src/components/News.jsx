"use client";
import React, { useState } from "react";
import { MORE_LESS_BUTTON, NEWS, NEWS_LIST } from "../constants/labels";

export default function News() {
  const displayItems = NEWS_LIST.slice(0, 3);
    const [isClicked, setIsClicked] = useState(null);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }
  return (
    <div className="News mt-10">
      <div className="NewsIntroduction text-center max-w-4xl mx-auto px-4 mb-12">
        <p className="text-[#011E56] text-4xl font-semibold mb-4">
          {NEWS.title}
        </p>
        <p className="text-lg text-gray-600">{NEWS.description}</p>
      </div>

      <div className="NewsContent flex flex-row px-30 gap-5">
        {displayItems.map((item) => (
          <div className="NewsContentElement flex flex-col">
            <img src={item.img} alt={item.title} className="NewsImg" />
            <p className="text-[#011E56] font-lg text-xl"> {item.title}</p>
            <p className="text-gray-600"> {item.description} </p>
            <p className="text-right text-gray-400 pr-10"> {item.date} </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full left-1/2 m-2">
        <button
          className="HistoryMoreLessButton px-3 py-2 rounded-xl bg-white border-1 border-black cursor-pointer w-70"
          onClick={handleClick}
        >
          {isClicked ? MORE_LESS_BUTTON.Less : MORE_LESS_BUTTON.More}
        </button>
      </div>
    </div>
  );
}
