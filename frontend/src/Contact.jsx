import React from "react";
import "./App.css"; // Import CSS file for styling

export default function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p><strong>Talk to us:</strong> +91 6362392308</p>
            <p><strong>Send us a message:</strong> <a href="mailto:anirudhreddy11104@gmail.com">anirudhreddy11104@gmail.com</a></p>
            <p><strong>Meet us at:</strong></p>
            <address>
                Bangalore, <br />
                Karnataka, <br />
                India
            </address>
        </div>
    );
}
