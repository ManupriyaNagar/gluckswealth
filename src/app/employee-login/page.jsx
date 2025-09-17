"use client"
import React, { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const res = await fetch("https://wealthelite.in/Login/login/validate-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    username: email,
                    password: password,
                    loginFor: "CLIENT",
                    callbackUrl: "https://www.neptunewealth.co.in",
                }),
            });

            const text = await res.text();

            // You may want to parse the response and handle accordingly.
            // Here, we just check for a successful status or keyword.
            if (res.ok && text.toLowerCase().includes("success")) {
                setSuccess("Login successful!");
                // Redirect or further logic here
            } else {
                setError("Invalid username or password.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-gray-100">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">Client Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Username</label>
                        <input
                            id="email"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholder="Enter your User Name"
                        />
                    </div>
                    <div className="mb-5 relative">
                        <label htmlFor="password" className="block mb-2 font-medium text-gray-700">Password</label>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition pr-16"
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-9 text-indigo-500 text-sm font-medium focus:outline-none"
                            tabIndex={-1}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    {error && (
                        <div className="mb-4 text-red-600 text-center font-medium">{error}</div>
                    )}
                    {success && (
                        <div className="mb-4 text-green-600 text-center font-medium">{success}</div>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}