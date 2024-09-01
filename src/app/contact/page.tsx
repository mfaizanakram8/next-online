import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <figure className="bg-white rounded-xl p-4 md:flex md:p-8 md:w-1/2">
        <Image
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src="/contact.png"
          alt="home"
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              &#9993; mfaizanakram536@gmail.com
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              &#128241; 03106800495
            </div>
          </figcaption>
          <div className="mt-4 space-x-4">
            <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Home
            </Link>
            <Link href="/address" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700">
              Address
            </Link>
            <Link href="/about" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700">
              About
            </Link>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Page;
