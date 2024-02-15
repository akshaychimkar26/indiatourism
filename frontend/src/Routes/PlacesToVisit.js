import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from '../Components/Carousel';

function PlacesToVisit() {
    const navi = useNavigate()
    const handleimg = (d) => {
        navi(`/places-to-visit/${d.id}`, { state: d })
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
            <h1 className='h1'>Top Tourist Destination India</h1>
            <hr className='hr' />
            <p className='text'><b>Top Tourist Destination India</b> is the home to numerous attractions, amenities, activities and beauties. It is not hard to believe that a land as diverse as India has a long list of travel destinations within its border. Starting from the valleys of <b>Kashmir</b> to the tri-colored sea of <b>Kanchipuram</b>, you will find numerous tourist attractions, which would suit your taste. If you were visiting India in winter, <b>Rajasthan</b>, <b>Agra</b>, <b>Maharashtra</b>, <b>Tamil Nadu</b>, <b>Kerala</b>, <b>Chandigarh</b>, <b>Karnataka</b>, Goa and other places would be in the top choice. If you choose to visit India in the monsoon, <b>Uttarakhand</b>, <b>Munnar</b>, <b>Mussorie</b>, <b>Cherrapunji</b> and Coorg are some of the places to choose. </p>
            {
                data.filter((item) => item.cat === "Places").map((d) => {
                    return (
                        <div className='flexmain'>
                            <p className='name' style={{ backgroundColor: "brown", color: "white" }}>{d.sub}</p>
                            <img className='i2' src={d.img} onClick={() => handleimg(d)} />
                            <p className='names'><span style={{ fontSize: "15px" }}>{'>'}</span>{d.name}</p>
                            <p className='names'><span style={{ fontSize: "15px" }}>{'>'}</span>{d.name1}</p>
                            <p className='names'><span style={{ fontSize: "15px" }}>{'>'}</span>{d.name2}</p>
                            <p className='names'><span style={{ fontSize: "15px" }}>{'>'}</span>{d.name3}</p>
                            <p className='names'><span style={{ fontSize: "15px" }}>{'>'}</span>{d.name4}</p>
                            <p className='name2'>{d.desc}</p>
                        </div>
                    )
                })
            }












        </div>
    )
}

export default PlacesToVisit