"use client";
import React from 'react';
import {
    HIGHLIGHT_NUMERIC,
    HIGHLIGHT_NUMERIC_LIST
}
from '../constants/labels';
//use to have count up
//step 1: intall npm install react-intersection-observer react-countup
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function HighlightNumeric() {
    // //func1 to handle count up
    const {ref, inView} = useInView ({
        triggerOnce: false,
        threshold: 0.1,
    })

    //func2 to handle count up
    const extractNumber = (str) => {
        return parseInt (str.replace(/[^0-9]/g, '')) || 0;
    }

    const extractSuffix = (str) => {
        return str.replace(/[0-9]/g,'');
    }

    return (
    <div 
        ref={ref} 
        className="Numeric py-16"
    >
        <div className="NumericIntroduction text-center max-w-4xl mx-auto px-4 mb-12">
            <p className="NumericIntroductionTitle text-[#011E56] text-4xl font-semibold mb-4">
                {HIGHLIGHT_NUMERIC.title}
            </p>
            <p className="NumericIntroductionDes text-lg text-gray-600">
                {HIGHLIGHT_NUMERIC.description}
            </p>
        </div>

        <div className="HighlightNumericContent flex flex-row justify-center items-center g-04 max-w-8xl mx-auto px-4">
            {HIGHLIGHT_NUMERIC_LIST.map((item) => (
                <div
                    key={item.id} 
                    className="NumericElement gap-8 w-80 text-center p-6 " 
                >
                    <p className="NumericElementHeader text-5xl font-bold text-red-500 mb-5">
                        {inView ? (
                            <CountUp 
                                start={0}
                                end={extractNumber(item.header)}
                                duration={1.5}
                                separator=','
                            />
                        ) : "0"}
                        <span> {extractSuffix(item.header)}</span>
                    </p>
                    
                    <p className="NumericElementTitle text-xl font-bold">
                        {item.title}
                    </p>

                    <p className="NumericElementDes wrap-normal text-lg text-gray-600">
                        {item.description}
                    </p>
                </div>
            ))

            }
        </div>
    </div>
  )
}
