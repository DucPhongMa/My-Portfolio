"use client";
import React from "react";
import { TvIcon } from '@heroicons/react/24/solid';
import {motion} from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-2'>My Experiences</h2>
      <div className="border border-[#3f333f] border-l-transparent border-r-transparent flex flex-wrap justify-center my-12 md:my-12 py-24 gap-4 text-white">
        <motion.div 
        initial={{x: -70, opacity: 0}} 
        animate={{x: 0, opacity: 1}} 
        transition={{duration: 0.5}} 
        className='flex flex-col items-center h-40 w-50 md:h-40 md:w-60 lg:h-48 lg:w-72 xl:h-56 xl:w-80'>
          <TvIcon className="h-40 text-purple-500 md:h-40 md:w-60 lg:h-48 lg:w-72 xl:h-56 xl:w-80" style={{width: '20rem'}}/>
          <div className="text-center">
            <h5 className="text-2xl font-bold">Co-op, Software Developer</h5>
            <p>January 2023 - September 2023</p>
            <p className="text-purple-500">The Ministry of Children, Community and Social Services</p>
          </div>
        </motion.div>
        <motion.div
          initial={{x: 70, opacity: 0}} 
          animate={{x: 0, opacity: 1}} 
         transition={{duration: 0.5}} className="py-8">
          <ul className="ml-11 list-disc w-100 leading-relaxed">
            <li>Helped get 2 out of 5 MCCSS's Digital Forms released successfully into production.</li>
            <li>Made extensive use of Angular concepts such as Reactive form, Databinding, Directives, Pipes, Routing, HTTPS methods.</li>
            <li>Developed responsive and user-friendly wed-based application with Angular 15+ and Ontario Design System.</li>
            <li>Collaborated with the team of 11 members to enhance the web application functionalities, user interface and user experience.</li>
            <li>Experienced with the SDLC in an Agile environment and project progress management using Azure DevOps.</li>
            <li>Practiced to enhance knowledge of GIT control to manage source code.</li>
          </ul>
        </motion.div>
        
      </div>
      
    </section>
  );
};

export default ExperienceSection;
