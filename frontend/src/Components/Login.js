import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registerStatus, setRegisterStatus] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Define isLoggedIn state variable

    const handleLogin = () => {
        axios.post('https://indiatourism.onrender.com/api/login', { email, password })
            .then(response => {
                console.log("Login response:", response.data);
                const { token, msg } = response.data;
                localStorage.setItem("token", token);
                console.log("Token stored in localStorage:", localStorage.getItem("token"));
                setRegisterStatus(msg);
                setIsLoggedIn(true); // Update login state to indicate user is logged in
                if (token) {
                    alert("Login successfully!");
                    navigate("/");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error("Login error:", error);
                alert('Login failed. Please check the console for details.');
            });
    };

    return (
        <div>
            <div className='su'>
                <h2>Login Form</h2>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button onClick={handleLogin}>Login</button>
                <p style={{ margin: "10px" }}>Please sign in first<Link className='nav1' to='/signup'>Signup</Link></p>
            </div>
        </div>
    );
}

export default Login;
