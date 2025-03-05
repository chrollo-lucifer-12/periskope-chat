"use client";
import Sidebar from "@/components/chat-window/sidebar";
import Navbar from "@/components/chat-window/navbar";
import Users from "@/components/chat-window/users";

export default function ChatApp() {
    return (
        <div className="h-screen w-screen flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <Navbar />
                <Users/>
            </div>
        </div>
    );
}
