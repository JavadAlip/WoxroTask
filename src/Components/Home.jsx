
import React from 'react';
import Fortnite from '../assets/fortnite.jpg';

const Home = () => {
  return (
    <div className='text-white text-center max-w-[1240px] mx-auto mt-10 lg:mt-20'>
      <h1 className='text-lg lg:text-2xl'>Epic Games: An American video game and software developer</h1>
      <h1 className='text-lg lg:text-2xl'>and publisher based in Cary, North Carolina.</h1>
      <img src={Fortnite} alt="Fortnite" className='w-full lg:w-1/2 mx-auto mt-6 lg:mt-10' />

      <p className='text-sm lg:text-base leading-relaxed mt-6 lg:mt-10 mx-4 lg:mx-auto max-w-lg'>
        Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.
      </p>
      
      <button className='bg-white text-black mt-6 lg:mt-10 py-2 px-4 font-bold rounded cursor-pointer'>Visit Website</button>
    </div>
  );
};

export default Home;

