import React from 'react';
import { NAV_LABELS } from '@/constants/labels';

export default function DropdownMenu({ hidden }) {
    if (hidden) return null;
    let number_column = Object.keys(NAV_LABELS).length;
    let column_width = 100 / number_column;

    return (
        <div className={`MenuBar fixed bg-gray-200 border-gray-300 text-black text-lg font-medium opacity-90 z-100 top-[15vh] left-1/2 -translate-x-1/2 w-[100vw] pl-[10vw]`}>
            <div className="MenuBarContainer flex flex-wrap justify-between">
                {Object.keys(NAV_LABELS).map((key, index) => {
                    const { label, options } = NAV_LABELS[key];
                    return (
                        <div
                            key={key}
                            className="MenuBarItem sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
                            style={{ width: `${column_width}%` }}
                        >
                            <p className="text-lg font-semibold mb-2">{label}</p>
                            <ul className="list-none p-0 m-0">
                                {options.map(option => (
                                    <li key={option.id} className="mb-1">
                                        <a href={option.path} className="text-blue-600 hover:underline">
                                            {option.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    );
}