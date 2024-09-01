import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div  className="flex items-center justify-center h-screen bg-gray-300">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 md:w-3/2 ">
    <Image className="w-34 h-34 md:w-88 md:h-auto md:rounded-none rounded-full mx-auto" src="/home.jfif" alt="home" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-xl font-medium">
          Welcome to my home sweet home&#44; where warmth and comfort greet you at every corner. Here&#44; every room is filled with love&#44; and every detail is a reflection of cherished memories. Come in&#44; relax, and feel right at home.
        </p>
      </blockquote>
    </div>
  </figure>
  </div>
  )
}

export default page