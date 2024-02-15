import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'
function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider className='slide' {...settings}>
            <div>
                <img className='carousell' src='https://www.theindiatourism.com/images/tourism-india.webp' />
            </div>
            <div>
                <img className='carousell' src='https://www.theindiatourism.com/images/tourism-india.webp' />
            </div>
            <div>
                <img className='carousell' src='https://www.theindiatourism.com/images/tourism-india.webp' />
            </div>
        </Slider>
    );
}

export default Carousel;
