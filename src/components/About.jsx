import React from 'react';
import { NAV_LABELS, COPYRIGHT } from '@/constants/labels';

// Sử dụng string path thay vì import
const logoSubtitle = '/images/logo-subtitle.png';

export default function About() {
    return (
        <div className="Logo h-auto p-20 items-start gap-30 flex flex-row justify-start">
            <div className='w-[25vw]'>
                <img 
                    src={logoSubtitle}
                    alt="SATRA Logo"
                    className='w-[75%]'
                />
                <p className='text-black'>{COPYRIGHT}</p>
            </div>

            <div className="MenuBarContainer flex flex-row justify-start w-full gap-30">
                {Object.keys(NAV_LABELS).map((key) => {
                    const { label, options } = NAV_LABELS[key];
                    return (
                        <div key={key} className="MenuBarItem">
                            <p className="text-lg font-semibold mb-2">{label}</p>
                            <ul className="list-none">
                                {options.map(option => (
                                    <li key={option.id} className="mb-1">
                                        <a href={option.path} className="text-gray-950 hover:text-gray-500">
                                            {option.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <div className='border-b-3 border-gray-200'></div>
        </div>
    );
}