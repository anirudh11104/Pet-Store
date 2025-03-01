import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import CSS file for styling

export default function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email,
                password,
            });

            localStorage.setItem("token", response.data.token); // Store token
            setIsAuthenticated(true); // Update auth state
            alert("Login successful!");
            navigate("/"); // Redirect to home
        } catch (error) {
            alert(error.response?.data?.error || "Login failed!");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <p>Login to access your cart.</p>
            <form className="login-form">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="button" onClick={handleLogin}>Login</button>
            </form>
            <p>Don't have an account? <a href="/Sign">Sign Up</a></p>
        </div>
    );
}
