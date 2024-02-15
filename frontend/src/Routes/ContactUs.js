import React from 'react';
import Carousel from '../Components/Carousel';
import { Link } from 'react-router-dom';

function ContactUs() {
    return (
        <div>
            <Carousel />
            <div className='flct'>
                <div className='text' ><Link style={{ color: "black", textDecoration: "none" }} to='/'>Home</Link> <span>{'>>'}</span><span className='text0' style={{ color: "red" }}>Contact Us</span></div>
            </div>
            <h1 className='h1'>Contact Us</h1>
            <hr className='hr' />
            <p className='text'>Thank you for showing your interest in The India Tourism Tour & Travel services. Please provide the information about your tour requirements in order to help us to serve you better. This information will enable us to route your request to the appropriate person. You should receive a response within 24 hours. </p>
            <div className='flcf'>
                <div>
                    <strong className='text'>The India Tourism:</strong>
                    <div className='text11' style={{ color: "red" }}>Prakash Singh Shekhawat</div>
                    <div className='text11' style={{ color: "green" }}><img src='https://www.theindiatourism.com/images/wa-logo.png' />+91-9549279999</div>
                    <strong className='text11'>Office Hours : (9:30 am to 5:30 pm)</strong>
                    <div className='text11' style={{ color: "red" }}>Email - info@theindiatourism.com</div>
                </div>
                <div style={{ marginLeft: "70px" }}><img src='https://www.theindiatourism.com/images/paypal.png' /></div>
                <div>
                    <strong className='text11'>Follow Us</strong>
                    <div className='text11'>
                        <img src='https://www.theindiatourism.com/images/facebook.png' />
                        <img src='https://www.theindiatourism.com/images/Youtube.png' />
                        <img src='https://www.theindiatourism.com/images/twitter-icon.png' />
                    </div>
                    <div className='text11'><img className='width' src='https://www.theindiatourism.com/images/atithi-devo-bhava.png' /></div>
                </div>
            </div>
            <p className='text12'>Our Offices in Rajasthan</p>
            <hr className='hr' />
            <div className='flcf1'>
                <div className='text112'>
                    <strong>Jaipur Head Office:</strong>
                    <div>B-26,Shekhawat colony,Sirsi</div>
                    <div>Road,</div>
                    <div>Jaipur,(Rajasthan)</div>
                    <div>Phone:<span style={{ color: "red" }}>+91-9549279999</span></div>
                    <div style={{ color: "red" }}>info@theindiatourism.com</div>
                </div>
                <div className='text112'>
                    <strong>Pushkar Branch Office:</strong>
                    <div>Motisar Link Road,Behind Pushkar</div>
                    <div>Railway Station,</div>
                    <div>Village Ghanehera,Rajasthan India</div>
                </div>
                <div className='text112'>
                    <strong>Jodhpur Office:</strong>
                    <div>469,mohan nagar B,BJS colony</div>
                    <div>Jodhpur (Rajasthan)</div>
                </div>
                <div className='text112'>
                    <strong>Jaisalmer Office:</strong>
                    <div>Shakti Singh</div>
                    <div>Sam sand dunes,near kanoi village</div>
                    <div>Jaisalmer (Rajasthan)</div>
                </div>
                <div className='text112'>
                    <strong>Contact Us:</strong>
                    <div>Mobile:-<span style={{ color: "red" }}>+91-9549279999</span></div>
                </div>
                <div className='text112'>
                    <strong>Office Hours:(9:30 am to 5:30 pm)</strong>
                </div>
                <div className='text112'>
                    <strong>Email Contact:</strong>
                    <div style={{ color: "red" }}>Email-info@theindiatourism.com</div>
                </div>
            </div>








        </div >
    );
}

export default ContactUs;
