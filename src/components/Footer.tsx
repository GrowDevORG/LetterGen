import React from 'react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import '../app/globals.css';

const Footer = () => {
  return (
    <footer className="bg-blue-900  pt-8 relative">
      <div className="flex justify-evenly  gap-4">
        <div>
          <div className="text-2xl">LetterGen</div>
          <ul className="flex gap-8 mt-4 list-none">
            <li>
              <Facebook />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div className="text-xl py-2">Quick Links</div>
            <ul className="flex flex-col gap-4 mt-3 list-none">
              <li>Home</li>
              <li>How It Works</li>
              <li>About us</li>
              <li>FAQ</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <div className="text-xl py-2">Legal</div>
            <ul className="flex flex-col gap-4 mt-3 list-none">
              <li>Privacy Policy</li>
              <li>Terms of service</li>
            </ul>
          </div>
          <div>
            <div className="text-xl py-2"> Support</div>
            <ul className="flex flex-col mt-3 gap-4 list-none">
              <li>Help Center</li>
              <li>Contact support</li>
              <li>Feedback</li>
            </ul>
          </div>
          <div>
            <div className="text-xl py-2">Resources</div>
            <ul className="flex flex-col gap-4 mt-3 list-none">
              <li>Blog</li>
              <li>Career</li>
              <li>Template library</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>
    </footer>
  );
};

export default Footer;
