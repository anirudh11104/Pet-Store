import React, { useState } from 'react';
import axios from 'axios';

export default function Sign() {
    const [firstName, setFirstName] = useState("Anirudh")
    const [lastName, setLastName] = useState("R")
    const [email, setEmail] = useState("anirudhreddy11104@gmail.com")
    const [password, setPassword] = useState("password")
    const [confirmPassword, setConfirmPassword] = useState("password")

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

    const handleFirstName = (f) => {
        setFirstName(f.target.value)
    }

    const handleLastName = (l) => {
        setLastName(l.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (p) => {
        setPassword(p.target.value)
    }
    
    const handleConfirmPassword = (c) => {
        setConfirmPassword(c.target.value)
    }

    return (
        <div>
            First Name: <input type="text" onChange={handleFirstName} required /><br/>
            Last Name: <input type="text" onChange={handleLastName} required /><br />
            Email: <input type="text" onChange={handleEmail} required /><br />
            Password: <input type="password" onChange={handlePassword} required /><br />
            Confirm Password: <input type="password" onChange={handleConfirmPassword} required /><br />
            <input type="submit" onClick={handleClick} />
            Already a user? <a href='/Login'>Login</a>
        </div>
    );
}
