import React from 'react';
import Fortnite1 from '../assets/fortnite.jpg';
import Fortnite2 from '../assets/fortnite.jpg';
import Fortnite3 from '../assets/fortnite.jpg';

const Sections = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
                <div>
                    <img src={Fortnite1} alt="Fortnite" style={{ width: '200px', height: 'auto', marginRight: '10px' }} />
                    <p className='text-white text-center font-thin'  style={{ maxWidth: '200px' }} >Explore large, destructible environments where no two games are ever the same.</p>
                </div>
                <div>
                    <img src={Fortnite2} alt="Fortnite" style={{ width: '200px', height: 'auto', marginRight: '10px' }} />
                    <p className='text-white text-center font-thin'  style={{ maxWidth: '200px' }}>Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale</p>
                </div>
                <div>
                    <img src={Fortnite3} alt="Fortnite" style={{ width: '200px', height: 'auto', marginRight: '10px' }} />
                    <p className='text-white text-center font-thin '  style={{ maxWidth: '200px' }}> Discover even more ways to play across thousands of creator-made game genres</p>
                </div>
            </div>
        </>
    );

};

export default Sections;
