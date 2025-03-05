"use client";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import AuthForm from "../components/auth-form";
import { signOut, getCurrentUser } from "@/lib/auth";
import ChatApp from "@/components/chat-window";

export default function Chat() {
  const [user, setUser] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [message, setMessage] = useState<string>("");


  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      if (user) setUser(user);
    };
    fetchUser();
  }, []);

  return (
      <div className="">
        {!user ? (
            <AuthForm onAuthSuccess={() => getCurrentUser().then(setUser)} />
        ) : (
            <ChatApp/>
            )}
      </div>
  );
}
