import React from 'react';
import ProjectCard from './projectCard';


const projects = [
    {
        image: 'Rectangle 1.png',  // Replace with actual image URL
        title: 'Modern Minimalist Apartment Design',
        description: 'The Modern Minimalist Apartment Design project aims to create a sleek, functional and comfortable living space for a young professional client.',
        designer: 'Maria Gomez',
        duration: '12 weeks',
        budget: '$50,000',
        size: '800 sq ft / 1 bedroom apartment',
    },
    {
        image: 'Rectangle 1.png',  // Replace with actual image URL
        title: 'Modern Minimalist Apartment Design',
        description: 'The Modern Minimalist Apartment Design project aims to create a sleek, functional and comfortable living space for a young professional client.',
        designer: 'Maria Gomez',
        duration: '12 weeks',
        budget: '$50,000',
        size: '800 sq ft / 1 bedroom apartment',
    },
    {
        image: 'Rectangle 1.png',  // Replace with actual image URL
        title: 'Modern Minimalist Apartment Design',
        description: 'The Modern Minimalist Apartment Design project aims to create a sleek, functional and comfortable living space for a young professional client.',
        designer: 'Maria Gomez',
        duration: '12 weeks',
        budget: '$50,000',
        size: '800 sq ft / 1 bedroom apartment',
    },
    {
        image: 'Rectangle 1.png',  // Replace with actual image URL
        title: 'Modern Minimalist Apartment Design',
        description: 'The Modern Minimalist Apartment Design project aims to create a sleek, functional and comfortable living space for a young professional client.',
        designer: 'Maria Gomez',
        duration: '12 weeks',
        budget: '$50,000',
        size: '800 sq ft / 1 bedroom apartment',
    },
    {
        image: 'Rectangle 1.png',  // Replace with actual image URL
        title: 'Modern Minimalist Apartment Design',
        description: 'The Modern Minimalist Apartment Design project aims to create a sleek, functional and comfortable living space for a young professional client.',
        designer: 'Maria Gomez',
        duration: '12 weeks',
        budget: '$50,000',
        size: '800 sq ft / 1 bedroom apartment',
    },
    {
        image: 'Rectangle 1.png',  // Replace with actual image URL
        title: 'Modern Minimalist Apartment Design',
        description: 'The Modern Minimalist Apartment Design project aims to create a sleek, functional and comfortable living space for a young professional client.',
        designer: 'Maria Gomez',
        duration: '12 weeks',
        budget: '$50,000',
        size: '800 sq ft / 1 bedroom apartment',
    },
];

const ProjectsList: React.FC = () => {
    return (
        <div className='p-4 border rounded-lg mt-4 h-[30rem] 2xl:h-[44rem]'>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-xl font-bold text-slate-600'>Projects</h1>
                <button className='text-blue-500 hover:underline text-sm'>SEE MORE</button>
            </div>
            <div className="overflow-y-auto h-[92%]">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectsList;
