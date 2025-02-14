import React from 'react';
import { signIn } from 'next-auth/react';
import { TextLoop } from './ui/text-loop';

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-4 border-b border-gray-200 w-full">
      <div className="font-bold text-2xl text-blue-500 w-[10%]">
        <TextLoop>
          <span>LetterGen</span>
          <span>लेटर Gen</span>
        </TextLoop>
      </div>
      <div>
        <ul className="list-none text-[#767b7c] gap-14 flex flex-row items-center group justify-center text-xl font-sans">
          <li className="group-hover:cursor-pointer">Features</li>
          <li className="group-hover:cursor-pointer">Pricing</li>
          <li className="group-hover:cursor-pointer">Contact sales</li>
          <li className="group-hover:cursor-pointer">About us</li>
        </ul>
      </div>
      <div className=" flex flex-row gap-6">
        <button
          onClick={() => signIn()}
          className="text-sm border-none hover:bg-[#edecee] rounded-md text-black p-2 pl-6 pr-6 transition duration-150"
        >
          Sign In
        </button>
        <button className="text-white text-sm bg-black hover:bg-[#18181B] py-1 rounded-md p-2 pl-6 pr-6 transition duration-150">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;
