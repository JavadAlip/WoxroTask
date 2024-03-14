import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div style={{ marginTop: '10px', marginRight: '10px',cursor: 'pointer' }} className='text-white flex items-center '>
      {/* Add other Navbar content here */}
      <div className="flex-grow"></div> {/* This will push the icon to the right */}
      <AiOutlineClose
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHovered ? { transition: 'transform 0.3s ease', transform: 'rotate(90deg)' } : { transition: 'transform 0.3s ease' }}
      />
    </div>
  );
}

export default Navbar;
