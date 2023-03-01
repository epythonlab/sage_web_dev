// src/components/About.js
import React from 'react';

function About(){

  return (
    <section>
      <div class="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <br className="hidden lg:inline-block"/>I'm Asibeh. I'm Data Science Enthusiast
          </h1>
          <p className="mb-8 leading-relaxed">
          I have over 9 years of working experience as Lecturer, Software Developer, Trainer and Python Developer
        </p>
        <div className="flex justify-center">
          <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none over:bg-green-600 rounded text-lg">
            work with me
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}
export default About;
