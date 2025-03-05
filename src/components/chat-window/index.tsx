"use client";
import Sidebar from "@/components/chat-window/sidebar";
import Navbar from "@/components/chat-window/navbar";

export default function ChatApp() {
    return (
        <div className="h-screen w-screen flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <Navbar />
                <div className="flex-1 bg-gray-100">Chat Content</div>
            </div>
        </div>
    );
}
