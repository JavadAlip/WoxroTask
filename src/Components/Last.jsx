import React from 'react';

const Last = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '150px' }}>
      <h1 style={{ fontSize: '1.5rem' }} className='text-white text-center '>Interested in delving deeper into the project?</h1>
      <p style={{ maxWidth: '600px', marginTop: '30px' }} className='text-white text-center font-thin'>
        If you'd like to explore further details about our initiatives or any of our affiliated brands, don't hesitate to connect. You can reach out to us via email at 
        <span style={{ fontWeight: 'bold' }}> hello@abc.com</span>
        {' '}
        or give us a call at
        <span style={{ fontWeight: 'bold' }}> +91 480 20802730.</span>
      </p>
    </div>
  );
};

export default Last;
