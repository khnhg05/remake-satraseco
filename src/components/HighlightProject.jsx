"use client";
import React, { useState } from 'react';
import {
  HIGHLIGHT_PROJECT,
  HIGHLIGHT_PROJECT_LIST
} from '../constants/labels';

export default function HighlightProject() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="HighLightProject py-16 flex flex-col items-center justify-center bg-gray-50">
      <div className="HighLightProjectIntroduction text-center max-w-4xl mx-auto px-4 mb-12">
        <p className="text-[#011E56] text-4xl font-semibold mb-4">{HIGHLIGHT_PROJECT.title}</p>
        <p className="text-lg text-gray-600">{HIGHLIGHT_PROJECT.description}</p>
      </div>

      <div className="HighLightProjectList flex flex-row mx-10 gap-3">
        {HIGHLIGHT_PROJECT_LIST.map((item, index) => (
          <div 
            className="HighLightProjectItem relative cursor-pointer overflow-hidden group" 
            key={item.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-[30vw] h-[30vw] object-cover transition-transform duration-300"
            />
            
            <div
                className={`absolute inset-0 bg-black text-white flex flex-col justify-center items-center p-4 transition-opacity duration-300 ${
                        hoveredIndex === index ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <p className="text-lg font-semibold mb-2">{item.title}</p>
                <p className="text-sm text-gray-200 mb-2">{item.address}</p>
                <ul className="mt-2 list-disc list-inside text-sm">
                    {item.info.map((info, idx) => (
                    <li key={idx}>{info}</li>
                    ))}
                </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
