import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-white text-black">
      <Image
        src="/image/animated-suspicious-eye-404-page.gif"
        alt="404 Not Found"
        width={800}
        height={600}
      />
      <h1 className="text-5xl font-bold mt-6">404 - Page Not Found</h1>
      <p className="text-lg text-gray-400 mt-2">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
