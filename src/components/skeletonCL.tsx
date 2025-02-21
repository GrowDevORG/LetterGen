import React from 'react';
import { Button } from './ui/button';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SkeletonCL = ({ handleSubmit }: any) => {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-2xl bg-white animate-pulse space-y-4 mt-8">
        {/* Header */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/6"></div>
        </div>

        {/* Recipient Info */}
        <div className="space-y-1 mt-6">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>

        {/* Salutation */}
        <div className="h-4 bg-gray-300 rounded w-1/6 mt-4"></div>

        {/* Body */}
        <div className="space-y-3 mt-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-300 rounded w-full"></div>
          ))}
        </div>

        {/* Signature Section */}
        <div className="space-y-2 mt-6">
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          size="lg"
          className="w-full max-w-md bg-green-500 hover:bg-green-600 ml-2 mr-2 text-white"
          onClick={handleSubmit}
        >
          Click to generate cover letter
        </Button>
      </div>
    </div>
  );
};

export default SkeletonCL;
