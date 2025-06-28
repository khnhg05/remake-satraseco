import React from 'react';

export default function SearchMenu({ hidden }) {
    if (hidden) return null;
    
    return (
        <div className="SearchMenu fixed top-[15vh] left-1/2 transform -translate-x-1/2 w-[40vw] text-black bg-gray-200 shadow-xl rounded-lg border border-gray-300 z-100">
            <div className="p-4">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm..." 
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        autoFocus
                    />
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                        Tìm
                    </button>
                </div>
                
                {/* Gợi ý tìm kiếm */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-600 mb-2">Gợi ý tìm kiếm:</div>
                    <div className="space-y-2">
                        <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Đại hội đồng cổ đông thường niên năm 2024</div>
                        <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Giới thiệu satraseco</div>
                        <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer">Tài liệu họp ĐHĐCĐ năm 2025</div>
                    </div>
                </div>
            </div>
        </div>
    );
}