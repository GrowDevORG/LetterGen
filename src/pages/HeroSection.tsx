import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 flex flex-col">
      <Header />
      <div className="bg-radial-gradient flex flex-col items-center h-screen">
        <h1 className="text-4xl font-extrabold text-center text-black mt-24">
          Craft Perfect Cover <br /> Letters in Seconds <br /> with AI
        </h1>
        <p className="text-black text-center mt-4 ">
          Say goodbye to the stress of writing cover letters, Our AI-powered
          generator creates personalized, <br /> professional cover letters
          tailored to your skills, <br /> experience, and the job you&apos;re
          applying for—instantly!
        </p>
        <button className="bg-blue-500 text-white font-extralight px-4 py-2 rounded-sm mt-4">
          Get started <MoveRight className="inline ml-1" />
        </button>
        <Image
          src="/image/hero-image.png"
          alt="hero"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
