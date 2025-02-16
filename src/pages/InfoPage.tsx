import Image from 'next/image';
import React from 'react';
import { ChevronsRight } from 'lucide-react';

const InfoPage = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="text-black text-md md:text-4xl lg:text-4xl font-extrabold mb-4">
        Revolutionizing Job Applications with AI
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-4">
        <div>
          <Image
            src={'/image/aboutUs-image.png'}
            width={500}
            height={500}
            alt="image"
          />
        </div>
        <div className="flex flex-col mt-4 gap-6 text-black">
          <div className="flex gap-2 p-2 md:p-0 lg:p-0">
            <ChevronsRight className="inline text-blue-600" />
            <p>
              We&apos;re on a mission to make job applications effortless and
              impactful.
            </p>
          </div>
          <div className="flex gap-2 p-2 md:p-0 lg:p-0">
            <ChevronsRight className="inline text-blue-600" />
            <p>
              Our AI-powered platform simplifies the process of creating
              personalized.
            </p>
          </div>
          <div className="flex gap-2 p-2 md:p-0 lg:p-0">
            <ChevronsRight className="inline text-blue-600" />
            <p>
              Professional cover letters that stand out. Whether you’re an
              experienced.
            </p>
          </div>
          <div className="flex gap-2 p-2 md:p-0 lg:p-0">
            <ChevronsRight className="inline text-blue-600" />
            <p>Professional or a first-time job seeker.</p>
          </div>
          <div className="flex gap-2 p-2 md:p-0 lg:p-0">
            <ChevronsRight className="inline text-blue-600" />
            <p>
              We’re here to help you put your best foot forward. Join thousands
              of
            </p>
          </div>
          <div className="flex gap-2 p-2 md:p-0 lg:p-0">
            <ChevronsRight className="inline text-blue-600" />
            <p>Users who trust us to bring their career stories to life!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPage;
