import Image from 'next/image';
import React from 'react';
import { ChevronsRight } from 'lucide-react';

const InfoPage = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="text-black text-md md:text-4xl lg:text-4xl font-extrabold mb-4 text-center">
        Revolutionizing Job Applications with AI
      </div>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <div className="flex-shrink-0">
          <Image
            src={'/image/aboutUs-image.png'}
            width={500}
            height={500}
            alt="image"
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="flex flex-col mt-4 gap-6 text-black max-w-lg">
          {[
            "We're on a mission to make job applications effortless and impactful.",
            'Our AI-powered platform simplifies the process of creating personalized cover letters.',
            'Professional cover letters that stand out. Whether you’re an experienced professional or a first-time job seeker.',
            'We’re here to help you put your best foot forward. Join thousands of users who trust us to bring their career stories to life!',
          ].map((text, index) => (
            <div key={index} className="flex gap-2 p-2 md:p-0">
              <ChevronsRight className="inline text-blue-600" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
