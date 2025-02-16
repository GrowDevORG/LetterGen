import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { TextLoop } from './ui/text-loop';
import Image from 'next/image';
import menuIcon from '@public/image/menuIcon.svg';
import crossIcon from '@public/image/crossIcon.svg';
import SideBar from './ui/SideBar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-row justify-between items-center p-4 border-b border-gray-200 w-full">
        <div className="font-bold text-2xl text-blue-500 w-[10%]">
          <TextLoop>
            <span>LetterGen</span>
            <span>लेटर Gen</span>
          </TextLoop>
        </div>
        <div className="hidden sm:block">
          <ul className="list-none text-[#767b7c] md:gap-14 sm:gap-6 flex flex-row items-center group justify-center sm:text-sm md:text-base lg:text-lg xl:text-xl font-sans md:ml-10 xl:ml-0">
            <li className="group-hover:cursor-pointer">Features</li>
            <li className="group-hover:cursor-pointer">Pricing</li>
            <li className="group-hover:cursor-pointer">Contact sales</li>
            <li className="group-hover:cursor-pointer">About us</li>
          </ul>
        </div>
        <div className="hidden sm:flex flex-row gap-4">
          <button
            onClick={() => signIn()}
            className="text-sm border border-black rounded-md text-black px-2"
          >
            Sign In
          </button>
          <button className="text-white text-sm bg-blue-500 rounded-md px-2">
            Sign Up
          </button>
        </div>
        <div className="flex sm:hidden justify-center items-center">
          {!isSidebarOpen ? (
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="sm:hidden"
            >
              <Image src={menuIcon} alt="menuIcon" />
            </button>
          ) : (
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="sm:hidden mr-1"
            >
              <Image src={crossIcon} alt="crossIcon" />
            </button>
          )}
        </div>
      </nav>
      {isSidebarOpen && <SideBar isOpen={isSidebarOpen} />}
    </>
  );
};

export default Header;
