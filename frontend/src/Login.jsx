import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
            alert(error.response.data.error || "Login failed!");
        }
    };

    return (
        <div>
            Login to access your cart.<br />
            Email: <input type="email" onChange={(e) => setEmail(e.target.value)} required /> <br />
            Password: <input type="password" onChange={(e) => setPassword(e.target.value)} required /> <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

