"use client";

import { icons } from "../../utils/sidebar-icons";

const Sidebar = () => {
    return (
        <aside className="w-[3%] border-r border-[#f5f7f6] h-full flex flex-col items-center py-4 bg-white">
            {icons.map((i, index) => (
                <i.icon key={index} className="text-gray-600 w-6 h-6 my-4 hover:text-gray-900 cursor-pointer" />
            ))}
        </aside>
    );
};

export default Sidebar;
