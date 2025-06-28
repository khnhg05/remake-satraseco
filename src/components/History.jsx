"use client";
import React, {useState} from 'react';
import {
    MORE_LESS_BUTTON,
    HISTORY,
    HISTORY_LIST
}
from '../constants/labels';

export default function History (){
    const [isClicked, setIsClicked] = useState(null);
    
    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const displayItems = isClicked ? HISTORY_LIST : HISTORY_LIST.slice(0,2);

    return (
        <div className="History px-15 py-30 mx-auto ">
            <div className="HistoryIntroduction text-center max-w-4xl mx-auto px-4 mb-12">
                <p className="text-[#011E56] text-4xl font-semibold mb-4">{HISTORY.title}</p>
                <p className="text-lg text-gray-600">{HISTORY.description}</p>
            </div>

            <div className="HistoryContent flex flex-col items-center justify-start px-4 mx-auto"> 
                {displayItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`HistoryContentElement flex flex-row gap-10 w-full mb-8 pt-4 max-w-6xl 
                                ${item.id === "1" ? "border-red-500 border-t-4": " border-t-2 border-gray-300"}
                                ${!isClicked && index === displayItems.length - 1 ? "faded-bottom opacity-30" : "" } 
                        `}
                    >
                        <p className="HistoryDetailTitle text-left text-black text-4xl font-bold w-[15vw] mr-10"> {item.title} </p>
                        <div
                            className="HistoryDetailInfoContainer text-left w-[50vw] ml-20"
                        >
                            {item.description.map((content, index) => (
                                <p
                                    key={index}
                                    className="HistoryDetailInfo text-left text-xl text-gray-600 gap-2"
                                > {content}
                                </p>
                            ))}
                        </div>
                    </div>
                ))
                }
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
    )
}