import React from 'react';
import Fortnite2 from '../assets/fortnite.jpg';
import Fortnite3 from '../assets/fortnite.jpg';

const Contribution = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '100px' }}>
                <h1 style={{ fontSize: '1.5rem' }} className='text-white text-center '>Our Contribution</h1>
                <p className='text-white text-center font-thin' style={{ maxWidth: '600px', textAlign: 'center' }}>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <div>
                    <h1  style={{ fontSize: '2rem' }} className='text-white text-center'>5M</h1>
                    <p className='text-white text-center font-thin' style={{ maxWidth: '200px' }} >Daily User
                        Engagements
                    </p>
                </div>
                <div>
                    <h1  style={{ fontSize: '2rem' }} className='text-white text-center'>500K</h1>
                    <p className='text-white text-center font-thin' style={{ maxWidth: '200px' }}>Revenue Surge for an
                        Platform
                    </p>
                </div>
                <div>
                    <h1  style={{ fontSize: '2rem' }} className='text-white text-center'>10X</h1>
                    <p className='text-white text-center font-thin ' style={{ maxWidth: '200px' }}> ROAS on all our
                        marketing campaigns</p>
                </div>
            </div>
        </>
    );
};

export default Contribution;
