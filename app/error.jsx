'use client'
import React from 'react';
import Link  from 'next/link';

const ErrorPage = ({ error }) => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-6xl font-bold">{error.toString()}</h1>
      <p className="text-2xl mt-4">Oops! Something went wong</p>
      <p className="mt-2">Please try again!</p>
      <Link href="/" className="mt-6 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
