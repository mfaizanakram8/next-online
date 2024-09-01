import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div  className="flex items-center justify-center h-screen bg-gray-300">
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/faizan.png" alt="home" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          I am a Full-Stack web developer based in Pakistan, currently pursuing a Bachelor degree in Computer Science from KFUEIT. I am deeply passionate about honing my coding skills and developing innovative websites. Alongside my full-stack web development work&#44; I am exploring AI generative models and their potential. I am continually focused on self-improvement and refining my technical abilities.
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
        I am Muhammad Faizan Akram
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        Full Stack web Developer
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page