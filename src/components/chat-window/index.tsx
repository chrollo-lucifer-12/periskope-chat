"use client"
import { useState } from "react";
import {HelpCircle, MoreVertical, Phone, RefreshCcw, Search} from "lucide-react";
import Sidebar from "@/components/chat-window/sidebar";

export default function ChatApp() {
    const [selectedChat, setSelectedChat] = useState(null);
    const chats = [
        { id: 1, name: "Test Skope Final 5", lastMessage: "Support2: This doesn’t go on Tuesday...", time: "Yesterday" },
        { id: 2, name: "Periskope Team Chat", lastMessage: "Periskope: Test message", time: "28-Feb-25" },
        { id: 3, name: "+91 99999 99999", lastMessage: "Hi there, I’m Swapnika...", time: "25-Feb-25" },
    ];

    return (
        <div className="h-screen w-screen">
            <Sidebar/>
        </div>
    );
}