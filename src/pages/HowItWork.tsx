import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Sign Up or Log In',
    description:
      'Get started by creating an account or logging in to access all the features with ease.',
    image: '/image/step-1.png',
    alt: 'User signing up',
  },
  {
    number: '02',
    title: 'Provide Job Details',
    description:
      'Enter the necessary job details to personalize your cover letter according to the specific role.',
    image: '/image/step-2.png',
    alt: 'Job details form',
  },
  {
    number: '03',
    title: 'Add Your Information',
    description:
      'Fill in your personal and professional information to ensure your cover letter reflects your qualifications.',
    image: '/image/step-3.png',
    alt: 'Adding personal details',
  },
  {
    number: '04',
    title: 'Generate Your Cover Letter',
    description:
      'Create a personalized cover letter with ease using our tools.',
    image: '/image/step-4.png',
    alt: 'Generated cover letter',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full h-full border-y border-gray-600">
      <div className="w-full border-b">
        <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x border-gray-600 py-8 md:py-16 relative">
          <Image
            src="/image/Rectangle.svg"
            alt="Corner border accent"
            width={20}
            height={20}
            className="absolute top-[-10px] left-[-10px]"
          />
          <Image
            src="/image/L.svg"
            alt="Corner decorative element"
            width={20}
            height={20}
            className="absolute top-0 right-0"
          />
          <Image
            src="/image/L.svg"
            alt="Corner decorative element"
            width={20}
            height={20}
            className="absolute bottom-0 left-0 rotate-180"
          />
          <Image
            src="/image/Rectangle.svg"
            alt="Corner border accent"
            width={20}
            height={20}
            className="absolute bottom-[-10px] right-[-10px] rotate-180"
          />

          <div className="relative bg-gradient-to-b from-[#86b1f585] to-transparent p-2 rounded-full">
            <Link
              href="#"
              className="block px-3 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-black bg-white shadow-2xl hover:shadow-xl border-slate-300 border-2"
            >
              How it Works
            </Link>
          </div>
          <h4 className="text-md sm:text-5xl lg:text-5xl font-bold mt-8 md:mt-12 text-center text-blue-500 px-4">
            Get started in 4 Simple Steps
          </h4>

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`w-full flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} justify-around items-center gap-8 mt-8 md:mt-16`}
            >
              <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
                <Image
                  src={step.image}
                  alt={step.alt}
                  title={step.title}
                  className="w-full"
                  width={500}
                  height={500}
                />
              </div>
              <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
                <span className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#3b82f6] to-transparent bg-clip-text text-transparent mb-4">
                  {step.number}
                </span>
                <h2 className="text-xl lg:text-xl xl:text-2xl text-black font-bold">
                  {step.title}
                </h2>
                <p className="text-md text-[#344054] leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
