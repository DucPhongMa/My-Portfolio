"use client";
import React, {useRef} from 'react';
import ProjectCard from './ProjectCard';
import {motion, useInView} from 'framer-motion';

const projectsData = [
    {
        id: 1,
        title: "E-commercial Website",
        description: "The project allows users be able to manage business in the store by handling CRUD functionality such as retrieve, create, modify and remove products.",
        technology: "Technology used: HTML5, CSS3, Bootstrap 4, JavaScript, Node.js, Express.js, MongoDB, Handlebars template engine",
        image: "/images/projects/E-commercial.jpg",
        tag: ["All"],
        gitURL: "https://github.com/DucPhongMa/nodejs_shoppingonline",
    },
    {
        id: 2,
        title: "Museum of Art Website",
        description: "A functioning backend and frontend website allowing users to search art items and keep track of their favorite list of arts as well as their search history.",
        technology: "Technology used: HTML5, CSS3, Bootstrap 5, JavaScript, NodeJS, Express.js, MongoDB, React.js/Next.js",
        image: "/images/projects/museum_2.png",
        tag: ["All"],
        gitURL: "https://github.com/DucPhongMa/WEB422_Assignment4",
        previewURL: "https://web-422-assignment4.vercel.app/"
    },
    {
        id: 3,
        title: "Blog Website",
        description: "A blogging website in which users can share their experiences and their stories as well as manage their blogs by posting and deleting functionalities.",
        technology: "Technology used: HTML5, CSS3, Bootstrap 4, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Handlebars template engine",
        image: "/images/projects/Blog.jpg",
        tag: ["All"],
        gitURL: "https://github.com/DucPhongMa/WEB322_BlogPostAssignment",
        previewURL: "https://unusual-newt-neckerchief.cyclic.app/blog"
    },
    {
        id: 4,
        title: "AWS Cloud-based Microservice ",
        description: "An AWS-based solution to manage generated data fragments via AWS services (ECS, ECR, ELB S3 Bucket, DynamoDB, Cognito) as well perform conversions based on respective types of data fragments and setup CI/CD pipelines for automatically building and deploying code.",
        technology: "Technology used: AWS services, Node.js, Express.js, Docker",
        image: "/images/projects/EC2-JSON.jpg",
        tag: ["All"],
        gitURL: "https://gitfront.io/r/mphong-duc/cCX3mWqwSaZu/fragments/",
        previewURL: "https://youtu.be/reKOfN8Rluo"
    }
]
const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };
    return (
        <section id="projects">
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-2'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 text-white gap-2 py-6'>
                <button className='rounded-full border-2 border-purple-500 px-6 py-3 text-xl'>All</button>
            </div>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project, index) =>(
                 <motion.li 
                    key={index} 
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4}}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        technology={project.technology}
                        imgURL={project.image}
                        gitURL={project.gitURL}
                        previewURL={project.previewURL}
                    />
                 </motion.li>
                 ))}
            </ul>
        </section>
    );
}

export default ProjectsSection;