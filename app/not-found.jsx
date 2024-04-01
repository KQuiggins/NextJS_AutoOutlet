import React from 'react';
import Link  from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <p className="mt-2">The page you're looking for doesn't exist or has been moved.</p>
      <Link href="/" className="mt-6 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
