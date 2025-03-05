"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth";

export default function AuthForm({ onAuthSuccess }: { onAuthSuccess: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async () => {
        setError(null);
        const { error } = isSignUp ? await signUp(email, password) : await signIn(email, password);
        if (error) return setError(error.message);
        onAuthSuccess();
    };

    return (
        <div className="max-w-md mx-auto p-4 border rounded">
            <h2 className="text-lg font-bold mb-4">{isSignUp ? "Sign Up" : "Login"}</h2>
            {error && <p className="text-red-500">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full mb-2"
            />
            <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white w-full">
                {isSignUp ? "Sign Up" : "Login"}
            </button>
            <p
                className="text-sm text-blue-500 cursor-pointer mt-2"
                onClick={() => setIsSignUp(!isSignUp)}
            >
                {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
            </p>
        </div>
    );
}
