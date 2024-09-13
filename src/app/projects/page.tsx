'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Image Searcher Bot',
      description: 'A brief description of Project One. This project does amazing things with modern technologies.',
      image: '/image.jpeg',
      github: 'https://github.com/aitazazahsan01/Image-Searcher-Bot',
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A brief description of Project Two. This project integrates various tools to solve complex problems.',
      image: '/weather.jpeg',
      github: 'https://github.com/aitazazahsan01/My-Weather-App',
    },
    {
      id: 3,
      title: 'Quranic Ayah Generator',
      description: 'A brief description of Project Three. A cutting-edge project showcasing innovative techniques.',
      image: '/quran.jpeg',
      github: 'https://github.com/aitazazahsan01/Generate-Quranic-Ayah',
    },
    {
      id: 4,
      title: 'Library Management System',
      description: 'A brief description of Project Four. This project focuses on scalability and performance.',
      image: '/lib.png',
      github: 'https://github.com/aitazazahsan01/LMS.java',
    },
    {
      id: 5,
      title: 'Gym Website Landing Page',
      description: 'A brief description of Project Five. This project leverages new technologies to improve efficiency.',
      image: '/gym.jpeg',
      github: 'https://github.com/aitazazahsan01/CodSoft',
    },
    {
      id: 6,
      title: 'PortFolio Website',
      description: 'A brief description of Project Six. This project showcases my portfolio in a dynamic way.',
      image: '/port.jpeg',
      github: 'https://github.com/aitazazahsan01/CodSoft',
    },
    {
      id: 7,
      title: 'Student Management System',
      description: 'A brief description of Project Seven. This project includes features for managing student data efficiently.',
      image: '/stud.jpeg',
      github: 'https://github.com/aitazazahsan01/Node-Projects-PIAIC/tree/main/Student%20Management%20System',
    },
    {
      id: 8,
      title: 'Adventerous Fight Game',
      description: 'A brief description of Project Eight. A game that offers an adventurous fighting experience.',
      image: '/game.jpeg',
      github: 'https://github.com/aitazazahsan01/Node-Projects-PIAIC/tree/main/Adventerous%20Game',
    },
    {
      id: 9,
      title: 'Quiz App',
      description: 'A brief description of Project Nine. A fun and interactive quiz application.',
      image: '/quiz.jpeg',
      github: 'https://github.com/aitazazahsan01/Node-Projects-PIAIC/tree/main/Quiz%20Api%20App',
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-extrabold mb-4 text-white">My Projects</h1>
        <p className="text-2xl font-bold text-white">Here are some of the projects I ve worked on.</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover:shadow-xl hover:-translate-y-4 transition-all duration-500">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white border rounded-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
