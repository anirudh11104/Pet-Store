import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS file for styling

export default function Sign() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleClick = async () => {
        if (password === confirmPassword) {
            try {
                const response = await axios.post("http://localhost:5000/register", {
                    firstName,
                    lastName,
                    email,
                    password,
                });
                alert(response.data.message);
            } catch (error) {
                alert(error.response.data.error);
            }
        } else {
            alert("Passwords do not match");
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form className="signup-form">
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
               
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

                <button type="button" onClick={handleClick}>Sign Up</button>
            </form>
            <p>Already a user? <a href='/Login'>Login</a></p>
        </div>
    );
}
