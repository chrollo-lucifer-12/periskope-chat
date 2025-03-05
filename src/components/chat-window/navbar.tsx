import {HelpCircle, MessageCircleMore, RefreshCcw} from "lucide-react";

const Navbar = () => {
    return (
        <nav className="border-b border-[#f5f7f6] w-full h-12 flex items-center justify-between px-4 bg-white shadow-md">
            <div className="flex items-center gap-x-3 text-[#7e8291]">
                <MessageCircleMore/>
                <p>chats</p>
            </div>
            <div className="flex gap-x-3">
                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#f5f7f6] rounded-lg bg-white hover:bg-gray-200">
                    <RefreshCcw size={16}/> Refresh
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-[#f5f7f6] rounded-lg bg-white hover:bg-gray-200">
                    <HelpCircle size={16}/> Help
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
