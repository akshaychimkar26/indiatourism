import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerStatus, setRegisterStatus] = useState('');

    const handleSignup = () => {
        // Make a POST request to the backend API
        axios.post('https://indiatourism.onrender.com/api/signup', { name, email, password })
            .then(response => {
                console.log("Signup response:", response.data); // Log the response to see what you're getting
                const { data, token, msg } = response.data;
                localStorage.setItem("token", token);
                console.log("Token stored in localStorage:", localStorage.getItem("token"));
                setRegisterStatus(msg);
                if (token) {
                    alert("Signup successfully!");
                    navigate("/");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error("Signup error:", error.response.data);
                alert('Signup failed. Please check the console for details.');
            });
    };

    return (
        <div>
            <div className='su'>
                <h2>Signup Form</h2>
                <label>Username:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={handleSignup}>Signup</button>
            </div>
        </div>
    );
}

export default Signup;
