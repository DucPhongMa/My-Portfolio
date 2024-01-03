"use client";
import React, {useTransition, useState} from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>React</li>
                <li>Docker</li>
                <li>AWS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Huflit University</li>
                <li>Seneca College of Applied Arts and Technology</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Tet event</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
      <section id="about" className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/abou.jpg" width={700} height={700} alt='About Image'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p className='text-base'>
                    I'm Kevin Ma. I have a passion about web development. I'm really excited building a whole website. I hope I can find a job related to web developing
                    especially frontend first and then learn more about backend so that I am able to acquire more knowledge and learn how to build a whole website. 
                    And I will do my best to learn it and hope that I can be a fullstack developer in the future. <br /><br />
                    I am currently attending Seneca College and am in Computer Programming and Analysis. During my time as a student in Seneca College, 
                    I have gained experience in building server and client-site applications by using HTML5, CSS3, JavaScript, Node.js, Express.js as well as Microsoft SQL Server, Oracle 12c, and MongoDB. In addition, 
                    I have gained a strong understanding of Objected-Oriented Programming in C++, RESTful API and using GIT for Source Control Management.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectedTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{""}</TabButton>
                    <TabButton selectedTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{""}</TabButton>
                    <TabButton selectedTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{""}</TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((e) => e.id === tab).content}</div>
            </div>
        </div>
      </section>
    );
}

export default AboutSection;