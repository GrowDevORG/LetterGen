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
          className="text-lg border border-black rounded-sm text-black px-2"
        >
          Sign In
        </button>
        <button className="text-white bg-blue-500 rounded-sm px-2">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Header;
