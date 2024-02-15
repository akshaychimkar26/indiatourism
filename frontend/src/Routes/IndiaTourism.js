import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from '../Components/Carousel';

function IndiaTourism() {
    const navi = useNavigate()
    const handleimg = (d) => {
        navi(`/india-tourism/${d.id}`, { state: d })
    }
    const [data, setData] = useState([])
    useEffect(() => {
        // Fetch data from the backend API
        axios.get('https://indiatourism.onrender.com/api/getallcourses')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div>
            <Carousel />
            <h1 className='h1'>Tourism of India</h1>
            <hr className='hr' />
            <p className='text'>India Tourism, <b>Himachal Pradesh, Kerala, Goa, Madhya Pradesh, Gujarat, Maharashtra</b> along with a few others are some of the best <b>places to visit</b> in India. With a variety of attractions, these places urge you to travel to your heart's content. And, whatever you are going to explore, will surely leave a long-lasting impression on you. <b>Beaches, backwaters</b>, vast stretches of <b>deserts</b>, snow-laden peaks and Indian <b>wildlife sanctuaries</b> make the country one of the best winter destinations. Tourism India during the winter season are perfect ways of bidding farewell to the previous year and welcoming the new one excitingly. When the sun starts shining brightly, people throng the picturesque hill stations with snow-laden peaks. A perfect escape from the scorching heat and soaring temperature can be found only in India.</p>
            {
                data.filter((item) => item.cat === "tourism").map((d) => {
                    return (
                        <div className='flexmain'>
                            <img className='i1' src={d.img} onClick={() => handleimg(d)} />
                            <p className='name'>{d.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default IndiaTourism