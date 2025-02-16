import React from 'react';
import Image from 'next/image';

const Divider = () => {
  return (
    <div className="flex justify-center w-full my-24">
      <div className="flex items-center w-full" style={{ maxWidth: '50%' }}>
        {/* Left dot */}
        <Image
          src="/image/Rectangle.svg"
          alt="rectangle decoration"
          className="-mr-2 z-10"
          width={24}
          height={24}
        />
        {/* Left line */}
        <div className="flex-grow h-px bg-gray-500"></div>
        {/* Center element */}
        <div className="mx-4">
          <Image
            src="/image/graph.Dyd7mhX6.svg"
            alt="divider decoration"
            className="w-6 h-6 object-contain"
            width={24}
            height={24}
          />
        </div>
        {/* Right line */}
        <div className="flex-grow h-px bg-gray-500"></div>
        {/* Right dot */}
        <Image
          src="/image/Rectangle.svg"
          alt="rectangle decoration"
          className="-ml-2 z-10"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default Divider;
