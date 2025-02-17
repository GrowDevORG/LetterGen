import React from 'react';
import Image from 'next/image';

const HowItWork = () => {
  return (
    <section className="w-full h-full border-y border-gray-600">
      <div className="w-full border-b">
        <div className="flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 mx-4 sm:mx-8 lg:mx-24 xl:mx-12 3xl:mx-48 border-x border-gray-600 py-8 md:py-16 relative">
          <Image
            src={'/image/Rectangle.svg'}
            alt="Rectangle"
            width={20}
            height={20}
            className="absolute top-[-10px] left-[-10px]"
          />
          <Image
            src={'/image/L.svg'}
            alt="L"
            width={20}
            height={20}
            className="absolute top-0 right-0"
          />
          <Image
            src={'/image/L.svg'}
            alt="L"
            width={20}
            height={20}
            className="absolute bottom-0 left-0 rotate-180"
          />
          <Image
            src={'/image/Rectangle.svg'}
            alt="Rectangle"
            width={20}
            height={20}
            className="absolute bottom-[-10px] right-[-10px] rotate-180"
          />
          <div className="relative bg-gradient-to-b from-[#86b1f585] to-transparent p-2 rounded-full">
            <a
              href="#"
              className="block px-3 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 text-[black] bg-white shadow-2xl hover:shadow-xl border-slate-300 border-2"
            >
              How it Works
            </a>
          </div>
          <h4 className="text-md sm:text-5xl lg:text-5xl font-bold mt-8 md:mt-12 text-center text-blue-500 px-4">
            Get started in 4 Simple Steps
          </h4>
          <div className="w-full mt-8 md:mt-16 flex flex-col md:flex-row justify-around items-center gap-8">
            <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
              <Image
                src="/image/step-1.png"
                alt=""
                className="w-full"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
              <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#3b82f6] to-transparent bg-clip-text text-transparent mb-4">
                01
              </h1>
              <h5 className="text-xl lg:text-xl xl:text-2xl text-black font-bold">
                Sign Up or Log In
              </h5>
              <p className="text-md text-[#344054] leading-7">
                Get started by creating an account or logging in to access all
                the features with ease.
              </p>
            </div>
          </div>
          <Image
            src="/image/line-left.D2lGd5zt.svg"
            alt=""
            className="w-[50%] hidden md:block"
            width={500}
            height={500}
          />
          <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center gap-8 mt-8 md:mt-0">
            <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
              <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#3b82f6] to-transparent bg-clip-text text-transparent mb-4">
                02
              </h1>
              <h5 className="text-xl lg:text-xl xl:text-2xl text-black font-bold">
                Provide Job Details
              </h5>
              <p className="text-md text-[#344054] leading-7">
                Enter the necessary job details to personalize your cover letter
                according to the specific role you&apos;re applying for.
              </p>
            </div>
            <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
              <Image
                src="/image/step-2.png"
                alt=""
                className="w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
          <Image
            src="/image/line-right.DszbghvZ.svg"
            alt=""
            className="w-[50%] hidden md:block"
            width={500}
            height={500}
          />
          <div className="w-full flex flex-col md:flex-row justify-around items-center gap-8 mt-8 md:mt-0">
            <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
              <Image
                src="/image/step-3.png"
                alt=""
                className="w-full"
                width={500}
                height={500}
              />
            </div>
            <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
              <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#3b82f6] to-transparent bg-clip-text text-transparent mb-4">
                03
              </h1>
              <h5 className="text-xl lg:text-xl xl:text-2xl text-black font-bold">
                Add Your Information
              </h5>
              <p className="text-md text-[#344054] leading-7">
                Fill in your personal and professional information to ensure
                your cover letter reflects your unique qualifications and
                experience.
              </p>
            </div>
          </div>
          <Image
            src="/image/line-left.D2lGd5zt.svg"
            alt=""
            className="w-[50%] hidden md:block"
            width={500}
            height={500}
          />
          <div className="w-full flex flex-col-reverse md:flex-row justify-around items-center gap-8 mt-8 md:mt-0">
            <div className="w-full md:w-[35%] flex flex-col justify-end text-center md:text-left">
              <h1 className="text-5xl md:text-[4rem] lg:text-[5rem] xl:text-[7rem] font-sans font-bold bg-gradient-to-b from-[#3b82f6] to-transparent bg-clip-text text-transparent mb-4">
                04
              </h1>
              <h5 className="text-xl lg:text-xl xl:text-2xl text-black font-bold">
                Generate Your Cover Letter
              </h5>
              <p className="text-md text-[#344054] leading-7">
                Create a personalized cover letter with ease using our tools.
              </p>
            </div>
            <div className="w-full sm:w-[70%] md:w-1/2 lg:w-1/3">
              <Image
                src="/image/step-4.png"
                alt=""
                className="w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
