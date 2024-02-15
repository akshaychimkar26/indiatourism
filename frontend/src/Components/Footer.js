import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <div className='flfoot' style={{ textAlign: 'center' }}>
                <p className='text1'>Contact Us</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>Sitemap</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>sitemap xml</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>Payment Procedure</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>Terms and Condition</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>Link exchange</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>Blog</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
                <p className='text1'>Rajasthan Tour</p>
                <hr style={{ lineHeight: "20px", marginLeft: "10px", marginRight: "10px" }} />
            </div>
            <div className='ftfl'>
                <div>
                    <div className='name1'>The India Tourism</div>
                    <div className='email'><img src='https://www.theindiatourism.com/images/Email-icon.webp' />: info@theindiatourism.com</div>
                    <div className='logo1'>
                        <div><img style={{ marginLeft: "5px" }} src='https://www.theindiatourism.com/images/facebook.webp' /></div>
                        <div><img style={{ marginLeft: "5px" }} src='https://www.theindiatourism.com/images/Youtube.webp' /></div>
                        <div><img style={{ marginLeft: "5px" }} src='https://www.theindiatourism.com/images/twitter-icon.webp' /></div>
                        <div><img style={{ marginLeft: "5px" }} src='https://www.theindiatourism.com/images/paypal.webp' /></div>
                    </div>
                </div>
                <div><img className='ftimg1' src='https://www.theindiatourism.com/images/India-tour-footer.webp' /> </div>
            </div>
        </div>
    );
}

export default Footer;
