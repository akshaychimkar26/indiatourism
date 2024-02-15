import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Carousel from './Components/Carousel';
import IndiaTourism from './Routes/IndiaTourism';
import TourPackages from './Routes/TourPackages';
import PlacesToVisit from './Routes/PlacesToVisit';
import TourOffers from './Routes/TourOffers';
import ContactUs from './Routes/ContactUs';
import axios from 'axios';
import Footer from './Components/Footer';
import SinglePage from './Routes/SinglePage'
import Signup from './Components/Signup';
import Login from './Components/Login';

function MainContent() {
  const navi = useNavigate()
  const handleimg = (d) => {
    navi(`/${d.id}`, { state: d })
  }
  const [data, setData] = useState([])
  const location = useLocation();

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
  // Check if the current location is the home route
  const isAppRoute = location.pathname === '/';

  return (
    <>
      {isAppRoute && (
        <div className='divmain'>
          <Carousel />
          <h1 className='h1'>The Indian Tourism - Guided & Customized Private to India</h1>
          <hr className='hr' />
          <div className='text'>
            <p>
              <p>
                <b>India Tourism</b>
                is an unequivocally welcoming nation, that bestows reverence and love for its visitors. A nation which follows only one belief blindly
                <b>“Atithi Devo Bhava”</b>
                which means “Guest is equivalent to God”. There is so much to discover, a land with varied civilizations, deep-rooted ideologies, uncountable faiths, that is also related to particular historical stories.
                <b>India Tourism</b>
                provides an outstanding rich heritage, tasty cuisines from numerous parts of the world, a multitude of enticing sightseeing spots, and much more while visiting this beautiful country. An avid traveler will simply find his place here.
                <br />
                <br />
                <b>Culture - India Tourism</b>
                <br />
                India is the country that quickly and last experiences on their mind get into one's heart. Perhaps there is no other nation with such a rich mixture of races, vivid colors, language, food, a land overloaded with vibrancy and intense inconsistencies. His country is the birthplace of Hinduism, Buddhism, Jainism and Sikhism; People in any area can be spotted adopting their own special cultural and religious traditions. Yoga is undeniably the biggest destination for spiritual visitors, and Rishikesh, situated in Northern India, is commonly regarded as the country's Yoga hub. Your trip to India will definitely send you goosebumps and a memory like a rollercoaster ride.
                <br /><br />
                <b>Architecture of India - India Tourism</b>
                <br />India has <b>
                  32 UNESCO World Heritage-listed sites</b>
                around the country, making it an epitome of historical wonders, if we speak about the architectural beauty of India has an extensive array of attractive forts, palaces, temples and its ruins and shrines as well. India itself is an international tourist bundle, they only need to select a destination according to their desires and prepare their itinerary. If you have a deep urge to discover a wonderland on this planet, then pack our bags and come to India, a land that is truly blessed with an abundance of natural wonder.
                <br />
                <br />
                <b>Explore India - India Tourism</b>
                <br />Well, every part of the world has a different tale to tell, with enchanting elegance and majestic culture, Northern India is truly blessed, one can get absolutely soaked in valleys and waterfalls and lush greenery of Himalayan ranges. The western part of the world has a striking beauty of architectural wonder, and what people enjoy about this place is the contemporary lifestyle. And we're talking about the regions of the Sunderbans or the eastern part of India, well, no one can argue that this area is blessed with the scenic beauty of high hills, ondulating rivers and waterfalls. Finally, the southern area is blessed with planting and foliage loads, an exotic destination in the entire world, a combination of enticing beach sites, Tourists continue to see hills and waterfalls again and again! There are plenty of great reasons to visit India Tourism, so we have already offered a mini-tour.
                <br />
                <br />
                <b>Why Travel to India? - India Tourism</b>
                <br />Plan a trip once, and you will come to know that this nation embellishes exotic and energetic metropolitan conventions with both serene and plain village life. Welcoming you to "The Soul of Incredible India" with open arms and intriguing taglines such as,
                <b>"God's Own Country",</b>
                this country has its own special ways of making people fall in love with her!<br />Foreign tourists who fly to India, You are certainly in for a surprise, particularly for the first time. Things can seem a little messy, overwhelming, and out of reach before you start to become attuned to the way of life in this diverse country. You will better plan for the trip ahead by becoming acquainted with the terrain, climate, history, languages and other important pieces of knowledge. Here are a few specifics that would be helpful.</p>
            </p>
          </div>
          <div>
            <h1 className='h1'>Find Your Ideal Tour Packages</h1>
          </div>
          <hr className='hr' />
          <p className='text'>Travel in India is like nothing you’ve ever experienced, from the magnificence Taj Mahal to the highlights of Kerala, Goa and India, this is a great trip for first-time visitors as it encompasses all of the major tourist destinations.</p>
          {
            data.filter((item) => item.cat === "home" && item.sub === "home1").map((d) => {
              return (
                <div className='flexmain'>
                  <img className='i1' src={d.img} onClick={() => handleimg(d)} />
                  <p className='name'>{d.name}</p>
                </div>
              )
            })
          }
          <h1 className='h1'>Find Your Perfect Holiday Destination</h1>
          <p className='text'>Check out this India most iconic heritage, natural beauty, colourful, cultural and spiritual Attractions India. Beaches, backwaters, vast stretches of deserts, snow-laden peaks and Indian wildlife sanctuaries make the country one of the best winter destinations.</p>
          {
            data.filter((item) => item.cat === "home" && item.sub === "home2").map((d) => {
              return (
                <div className='flexmain'>
                  <img className='i1' src={d.img} onClick={() => handleimg(d)} />
                  <p className='name'>{d.name}</p>
                  <hr style={{ border: "1px dashed" }} />
                  <p className='name'>{d.thing}</p>
                </div>
              )
            })
          }
          <div className='duration'>
            <h1 className='h2'>India Tour Packages By Duration</h1>
            <hr style={{ border: "1px dashed" }} />
            <p className='text' style={{ color: "white" }}>Explore India tour packages with duration ranging from 1 to 10+ days. There are 150 tours that cover the tour in 1-7 Days. On the other hand there are more than 300 Tours of 8-15 Days and more than 15 Days.  </p>
            <div className='circlediv'>
              <div className='circle'>2-5<hr className='hr1' /> Days Tour</div>
              <div className='circle'>6-10<hr className='hr1' /> Days Tour</div>
              <div className='circle'>11-15<hr className='hr1' /> Days Tour</div>
              <div className='circle'>16-20<hr className='hr1' /> Days Tour</div>
              <div className='circle'>India<hr className='hr1' /> Group Tour</div>
              <div className='circle'>India<hr className='hr1' />Tour offers</div>
            </div>
          </div>
          <h1 className='h1'>Choose Your Style of Tour Packages</h1>
          <p className='text'>Our collection of tour are themed by a style to help you get the most out of your wonderful holiday in India whether you're looking for a small group tour, private tailor made holiday to see India, These packages are meant to cater every of your interest, and that too without hampering your comfort in the travel. The intriguing land of India has so much to explore. </p>
          {
            data.filter((item) => item.cat === "home" && item.sub === "home3").map((d) => {
              return (
                <div className='flexmain'>
                  <img className='i1' src={d.img} onClick={() => handleimg(d)} />
                  <p className='name'>{d.name}</p>
                </div>
              )
            })
          }
          <h1 className='h1'>Other language Websites</h1>
          <hr className='hr' />
          <div className='fleximg'>
            <div className='img'><img src='https://www.theindiatourism.com/images/viaggi-logo.webp' /></div>
            <div className='img'><img src='https://www.theindiatourism.com/images/reizen-india.webp' /></div>
            <div className='img'><img src='https://www.theindiatourism.com/images/viaje-logo.webp' /></div>
            <div className='img'><img src='https://www.theindiatourism.com/images/voyage-logo.webp' /></div>
            <div className='img'><img src='https://www.theindiatourism.com/images/Reise-Indien.webp' /></div>
          </div>


        </div>

      )}
    </>
  );
}

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Header />
          <Navbar />
          <Routes>
            <Route path='/:id' element={<SinglePage />} />
            <Route path='/india-tourism' element={<IndiaTourism />} />
            <Route path='/india-tourism/:id' element={<SinglePage />} />
            <Route path='/india-tours' element={<TourPackages />} />
            <Route path='/india-tours/:id' element={<SinglePage />} />
            <Route path='/places-to-visit' element={<PlacesToVisit />} />
            <Route path='/places-to-visit/:id' element={<SinglePage />} />
            <Route path='/offers' element={<TourOffers />} />
            <Route path='/offers/:id' element={<SinglePage />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/*' element={<MainContent />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
