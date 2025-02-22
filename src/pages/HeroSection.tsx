'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import { MoveRight } from 'lucide-react';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const HeroSection = ({
  session,
  status,
}: {
  session: Session;
  status: 'loading' | 'authenticated' | 'unauthenticated';
}) => {
  const router = useRouter();
  const handleGetStarted = () => {
    if (status === 'authenticated') {
      router.push('/dashboard');
    } else {
      router.push('/auth');
      toast.error('Please log in to continue.');
    }
  };

  return (
    <section className="bg-gray-100 flex flex-col bg-radial-gradient overflow-x-hidden">
      <Header session={session} status={status} />
      <div className=" flex flex-col items-center h-screen">
        <h1 className="text-4xl font-extrabold text-center text-black mt-24">
          Craft Perfect Cover <br /> Letters in Seconds <br /> with AI
        </h1>
        <p className="text-black text-center text-sm p-2 md:text-base lg:text-base md:p-0 lg:p-0 mt-4">
          Say goodbye to the stress of writing cover letters, Our AI-powered
          generator creates personalized, <br /> professional cover letters
          tailored to your skills, <br /> experience, and the job you&apos;re
          applying for—instantly!
        </p>
        <button
          className="bg-blue-500 text-white font-extralight px-4 py-2 transition-all duration-150 rounded-sm mt-4 group hover:scale-105 hover:bg-blue-600"
          onClick={handleGetStarted}
        >
          Get started{' '}
          <MoveRight className="inline ml-1 duration-150 group-hover:translate-x-2" />
        </button>
        <Image
          src="/image/hero-image.png"
          alt="Illustration of AI-generated cover letter creation"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default HeroSection;
