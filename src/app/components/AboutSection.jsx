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
                <li>Next.js</li>
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
                <li>Seneca's Tet 2023 event</li>
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
                    Hello I'm Kevin Ma, I'm currently attending <span className='text-purple-400 font-bold'>Seneca College</span> and majoring in <span className='text-purple-400 font-bold'>Computer Programming and Analysis</span> in the last semester. 
                    With the co-op experience in Software Developer at the <span className='text-purple-400 font-bold'>Ministry of Children, Community and Social Services (MCCSS)</span>, 
                    I have gained valuable hands-on experience in the IT industry and enhanced my problem-solving and communication skills. 
                    During this time with Seneca College and MCCSS, I have learned and worked extensively with frontend and backend development
                    as well as Docker and AWS Cloud Computing.<br /><br />
                    Additionally, I also have an understanding of Objected-Oriented Programming, Solid Principles, Unit Testing, Integration Testing and 
                    knowledge of using GIT for Source Code Control Management.<br /><br />
                    I'm currently seeking long-term opportunities as a Software Developer where my technical skills, abilities and knowledge can be utilized and continue expanding my skill set.
                    With my dedication and practical experience, I'm eager to apply and collaborate with a dynamic team to drive the success of software development projects.
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