import React from 'react';
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from 'next/link';
import Image from 'next/image';

const ContactSection = () => {
    return (
        <section id='contact' className='flex items-center justify-center my-12 md:my-12 py-24 gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-2/3 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let's connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    {" "}
                    I&apos;m currently looking for new opportunities, my inbox is always
                    open. Whether you have a question or just want to say hi, I&apos;ll
                    try my best to get back to you!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link target="_blank" href="https://github.com/DucPhongMa">
                        <Image src={GithubIcon} alt='Github Icon'/>
                    </Link>
                    <Link target="_blank" href="https://www.linkedin.com/in/kevin-ma-4b7672241/">
                        <Image src={LinkedinIcon} alt='linkedin Icon'/>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    
                </div>
            </div>
        </section>
    );
}

export default ContactSection;