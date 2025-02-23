"use client";
import React from 'react';
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';
import Link from 'next/link';
const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div  
                    initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{duration: 0.5}} 
                    className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm {""}</span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Kevin',
                                1000, // wait 1s before replacing 
                                'Web Developer',
                                1000,
                                'Software Developer',
                                1000,
                                'Mobile Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        Student @ Seneca College <br />
                        Co-op, Software Developer @ Ministry of Children, Community and Social Services
                    </p>
                 
                    <div>
                        <Link target="_blank"
                        href="/images/documents/DucPhongMa-resume-dev.pdf"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
                        >
                            Resume
                        </Link>
                        <Link target="_blank"
                        href="/images/documents/DucPhongMa_Cover-Letter.pdf"
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Cover Letter
                            </span>
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{opacity: 0, scale: 0}} 
                    animate={{opacity: 1, scale: 1}} 
                    transition={{duration: 0.5}} 
                    className='col-span-5 place-self-center mt-4 lg:mt-0'>
                        <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                            <Image src="/images/myPhoto.jpg"
                                alt='hero image'
                                className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                                width={300}
                                height={300}
                            />
                        </div>            
                </motion.div>
            </div>         
        </section>
    );
}

export default HeroSection;
