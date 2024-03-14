import React from 'react';
import Fortnite from '../assets/fortnite.jpg';

const Home = () => {
  return (
    <div className='text-white text-center' style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '1.3rem' }}>Epic Games: An American video game and software developer</h1>
      <h1 style={{ fontSize: '1.3rem' }}>and publisher based in Cary, North Carolina.</h1>
      <img src={Fortnite} alt="Fortnite" style={{ width: '50%' }} />

      <p className='text-center font-light'  style={{ width: '50%', marginTop: "30px" }}>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
    <button style={{ backgroundColor: 'white', color: 'black', marginTop: "30px", padding: '10px 20px',fontWeight: 'bold', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Visit Website</button>
    </div>
  );
};

export default Home;
