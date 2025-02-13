import React from 'react';
import { signIn } from 'next-auth/react';
import { TextLoop } from './ui/text-loop';

const Header = () => {
  return (
    <nav className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
      <div className="font-bold text-2xl text-blue-500">
        <TextLoop>
          <span>LetterGen</span>
          <span>लेटर Gen</span>
        </TextLoop>
      </div>
      <div>
        <ul className="list-none gap-14 flex flex-row text-black text-lg">
          <li>Features</li>
          <li>Pricing</li>
          <li>Contact sales</li>
          <li>About us</li>
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
