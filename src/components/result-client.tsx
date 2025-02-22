'use client';
import { useFormContext } from '@/context/formcontext';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import UserDropdown from './user-dropdown';
import SkeletonCL from './skeletonCL';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Session } from 'next-auth';

const ResultClient = ({ session }: { session: Session }) => {
  const { formData, setCoverLetter, coverLetter } = useFormContext();
  const imageRef = useRef(null);
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const localData = localStorage.getItem('formData')
    ? JSON.parse(localStorage.getItem('formData') as string)
    : null;
  // const [loading, setLoading] = useState(false);

  const handleAnotherOne = () => {
    localStorage.removeItem('formData');
    setCoverLetter('');
    router.push('/dashboard');
  };

  const handleDownloadPDF = async () => {
    console.log(formData);
    if (imageRef.current) {
      const html2pdf = (await import('html2pdf.js')).default;
      const opt = {
        filename: 'coverletter.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      };
      html2pdf().from(imageRef.current).set(opt).save();
    }
  };

  const fetchCoverLetter = async () => {
    try {
      // setLoading(true);
      const response = await fetch('/api/letter-gen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: localData ? JSON.stringify(localData) : JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // setLoading(false);
        setCoverLetter(data.coverLetter);
      } else {
        console.error('Failed to fetch cover letter');
      }
    } catch (error) {
      console.error('Error fetching cover letter:', error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      fetchCoverLetter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted]);

  const handleSubmit = () => {
    console.log('clciked');
    setIsSubmitted(true);
  };

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const navigateToHomePage = () => {
    localStorage.removeItem('formData');
    setCoverLetter('');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1
            className="text-3xl font-bold text-blue-500 cursor-pointer"
            onClick={navigateToHomePage}
          >
            LetterGen
          </h1>
          <div className="flex items-center gap-2">
            <UserDropdown session={session!} />
          </div>
        </div>
      </header>
      {!coverLetter ? (
        <SkeletonCL handleSubmit={handleSubmit} />
      ) : (
        <main className="container mx-auto px-4 py-8 flex flex-col items-center">
          <Card className="w-full max-w-3xl min-h-[800px] shadow-lg mb-6">
            <div
              className="min-h-screen bg-white p-4 md:p-8 lg:p-12"
              ref={imageRef}
            >
              {/* Diagonal gradient backgrounds */}
              <div className="relative mx-auto max-w-3xl">
                <div className="absolute -left-4 -right-4 -top-4 h-[300px] -skew-y-6 bg-gradient-to-r from-navy-900 to-sky-100" />
                <div className="absolute -bottom-4 -left-4 -right-4 h-[300px] -skew-y-6 bg-gradient-to-r from-sky-100 to-navy-900" />

                {/* Letter content */}
                <div className="relative bg-white p-8 md:p-12">
                  {/* Header */}
                  <h1 className="mb-16 text-center text-4xl font-bold tracking-wider text-black md:text-5xl">
                    {localData?.name}
                  </h1>

                  {/* Date */}
                  <div className="mb-8">
                    <p className="text-gray-900">{formattedDate}</p>
                  </div>

                  {/* Recipient */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-normal text-gray-900">
                      {localData.recipientName}
                    </h2>
                  </div>

                  {/* Greeting */}
                  <div className="mb-6">
                    <p className="text-gray-900">
                      Dear {localData.recipientName},
                    </p>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-6">
                    <p className="text-gray-800">{coverLetter}</p>
                  </div>

                  {/* Closing */}
                  <div className="mt-12 space-y-6">
                    <p className="text-gray-900">Best Regards,</p>
                    <p className="text-xl font-semibold text-gray-900">
                      {localData.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-4 w-full max-w-3xl items-center">
            <Button
              size="lg"
              className="w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white"
              onClick={handleAnotherOne}
            >
              Make another one
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full max-w-md bg-white border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={handleDownloadPDF}
            >
              Download PDF
            </Button>
          </div>
        </main>
      )}
    </div>
  );
};

export default ResultClient;
