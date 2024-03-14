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
            <div style={{ display: 'flex', marginRight: '10px' }}>
                <button className='bg-black text-white mt-6 lg:mt-10 py-2 px-4 font-bold rounded cursor-pointer' style={{ border: '1px solid white' }}>Ring us on Skype</button>
                <div style={{ width: '10px' }}></div> {/* Add space between buttons */}
                <button className='bg-white text-black mt-6 lg:mt-10 py-2 px-4 font-bold rounded cursor-pointer'>Contact Us</button>
            </div>

        </div>
    );
};

export default Last;
