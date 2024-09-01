import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
        <figure className="bg-white rounded-xl p-4 md:flex md:p-8 md:w-1/2">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/address.jfif" alt="home" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Adda gulmerg chowk 
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Rahim yar khan, Pakistan
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page