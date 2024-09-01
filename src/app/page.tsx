import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 md:w-3/2">
        <Image 
          className="w-34 h-34 md:w-88 md:h-auto md:rounded-none rounded-full mx-auto" 
          src="/home.png" 
          alt="home" 
          width="384" 
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-xl font-medium">
              Welcome to my home sweet home&#44; where warmth and comfort greet you at every corner. Here&#44; every room is filled with love&#44; and every detail is a reflection of cherished memories. Come in&#44; relax, and feel right at home.
            </p>
          </blockquote>
          <div className="mt-4 space-x-4">
            <Link href="/contact" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
              Contact
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
}

export default Page;
