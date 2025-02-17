import React, { useEffect } from 'react';
import Image from 'next/image';
import ArrowOutlined from '@public/image/ArrowOutlined.svg';
import { signIn } from 'next-auth/react';

interface SideBarProps {
  isOpen: boolean;
}

const MenuItem = ({ label }: { label: string }) => (
  <li className="w-full flex justify-between">
    <span>{label}</span>
    <Image src={ArrowOutlined} alt="arrow" />
  </li>
);

const SideBar = ({ isOpen }: SideBarProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <div
      className={`fixed w-full h-screen bg-gray-100 top-[73px] left-0 z-50 transition-opacity duration-200 ${
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-hidden={!isOpen}
    >
      <ul className="text-black font-medium text-base mx-4 space-y-8 mt-12">
        {['Features', 'Pricing', 'Contact sales', 'Our team', 'About us'].map(
          (item) => (
            <MenuItem key={item} label={item} />
          )
        )}
      </ul>
      <div className="mt-28 w-full flex justify-center space-x-5">
        <button
          onClick={() => signIn()}
          type="button"
          className="text-base font-medium border border-black rounded-md text-black px-5 py-1 hover:bg-black hover:text-white transition-colors"
        >
          Sign In
        </button>
        <button
          type="button"
          className="text-white text-base font-medium bg-blue-500 rounded-md px-5 py-1 hover:bg-blue-600 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SideBar;
