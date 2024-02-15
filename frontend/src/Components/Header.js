import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

function Header() {
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload(); // Reload the page to reflect the logout state
    }

    return (
        <div className='head'>
            <div>
                <Link to='/'>
                    <img className='logo' src='https://pbs.twimg.com/profile_images/2685677343/0f10898c784ec4896d7c97cf932e65aa_400x400.png' alt="not found" />
                </Link>
            </div>
            <div>
                <img className='logo1' src='https://hblimg.mmtcdn.com/content/hubble/img/delhi/mmt/activities/t_trp/m_activities_delhi_red_fort_l_341_817.jpg?im=Resize=(540,214.5)' alt="not found" />
            </div>
            <div className='para'>
                <p>Email: info@theindiatourism.com</p>
                <img src='https://www.theindiatourism.com/images/india.webp' alt="not found" />
                <p className='p1'>+91-9549279999</p>
            </div>
            {/* Conditional rendering of login/logout link */}
            <div>
                {token ? (
                    <div>
                        <button className='nav2' onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div>
                        <Link className='nav2' to="/login">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
