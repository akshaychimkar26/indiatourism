import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Carousel from '../Components/Carousel';

function TourOffers() {
    const navi = useNavigate()
    const handleimg = (d) => {
        navi(`/offers/${d.id}`, { state: d })
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
            <h1 className='h1'>India Special Offer Tour Packages</h1>
            <hr className='hr' />
            <p className='text'><b>India Special Offer Tour</b> contains the particularly special experience of India. Such as <b>Luxury Tours,</b> Pilgrimage tours for all the religion people, <b>Festival tours</b> of India etc. <b>Do Dham, char Dham,</b> Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque &amp; Dargah tours under Piligrimage tour. Festivals of North East, <b>Ladakh,</b> Rajasthan etc are very popular among the tourist. We also orgainise tour for some particular interest like short trekking in the Himalayan region, <b>camel safari</b> in Rajasthan, <b>Honeymoon tours,</b> trout fishing in the still lakes of Himalayan valleys, house boat holidays in <b>Kerala</b> or <b>Kashmir,</b> White water rafting on Ganges and other rivers and so on. Create memoirs that last a lifetime by exploring the much admired places of India. We tender affordable and attractive <b>India Tour Packages</b> to suit the needs of every tourist. Choosing any of these <b>holiday packages</b> will provide you with wholesome experiences that you will love to treasure with your friends in joyful time.</p>
            {
                data.filter((item) => item.cat === "Offers").map((d) => {
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

export default TourOffers