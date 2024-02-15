import React from 'react'
import { useLocation } from 'react-router-dom'
function Singlepage() {
    const location = useLocation()
    const desc = location.state.desc;

    // Function to split the description into words and apply styling to middle words
    const customizeDesc = (desc) => {
        if (!desc) return null; // Return null if desc is undefined
        const words = desc.split(' ');
        return words.map((word, index) => (
            // Check if the word is capitalized
            (word && word[0] === word[0].toUpperCase()) ? (
                <span key={index} style={{ color: 'brown' }}>{word} </span>
            ) : (
                <span key={index}>{word} </span>
            )
        ));
    };
    return (
        <div>
            <div><img className='im1' src={location.state.img1} /></div>
            <div>
                <div className='text'>
                    {/* Call customizeDesc function to customize the description */}
                    {customizeDesc(desc)}
                </div>
            </div>
            <div className='flexmain'>
                <div className='divin' style={{ display: 'inline-block' }}>
                    <div><img className='i1' src={location.state.img2} /></div>
                    <div className='name'>{location.state.name1}</div>
                </div>
                <div className='divin' style={{ display: 'inline-block' }}>
                    <div><img className='i1' src={location.state.img3} /></div>
                    <div className='name'>{location.state.name2}</div>
                </div>
                <div className='divin' style={{ display: 'inline-block' }}>
                    <div><img className='i1' src={location.state.img4} /></div>
                    <div className='name'>{location.state.name3}</div>
                </div>
                <div className='divin' style={{ display: 'inline-block' }}>
                    <div><img className='i1' src={location.state.img5} /></div>
                    <div className='name'>{location.state.name4}</div>
                </div>
            </div>


        </div>
    )
}

export default Singlepage