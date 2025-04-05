// pages/user/CourseList.jsx
import React from 'react';
import CourseCard from '../../components/CourseCard';

const CourseList = () => {
  const courses = [
    {
      id: 1,
      name: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      image: 'https://fakeimg.pl/300x180/?javascript'
    },
    {
      id: 2,
      name: 'React for Beginners',
      description: 'Learn to build dynamic web apps using React.',
      image: 'https://fakeimg.pl/300x180/?reactjs'
    },
    {
      id: 3,
      name: 'Fullstack Web Dev',
      description: 'Become a fullstack developer using MERN stack.',
      image: 'https://fakeimg.pl/300x180/?coding,web'
    },
    {
      id: 4,
      name: 'Python Programming',
      description: 'Get started with Python for web and data science.',
      image: 'https://fakeimg.pl/300x180/?python'
    },
    {
      id: 5,
      name: 'UI/UX Design Basics',
      description: 'Understand the principles of user-centered design.',
      image: 'https://fakeimg.pl/300x180/?design,ui'
    },
    {
      id: 6,
      name: 'Node.js Crash Course',
      description: 'Build scalable backend apps with Node.js.',
      image: 'https://fakeimg.pl/300x180/?nodejs'
    },
    {
      id: 7,
      name: 'Data Structures in JS',
      description: 'Learn how to use arrays, trees, and graphs.',
      image: 'https://fakeimg.pl/300x180/?data,structure'
    },
    {
      id: 8,
      name: 'DevOps with Docker',
      description: 'Use Docker and CI/CD tools in projects.',
      image: 'https://fakeimg.pl/300x180/?docker,devops'
    },
    {
      id: 9,
      name: 'Machine Learning Intro',
      description: 'Understand ML concepts using scikit-learn.',
      image: 'https://fakeimg.pl/300x180/?machinelearning'
    },
    {
      id: 10,
      name: 'Firebase & Authentication',
      description: 'Add login, signup, and storage using Firebase.',
      image: 'https://fakeimg.pl/300x180/?firebase'
    },
    {
      id: 11,
      name: 'TypeScript in React',
      description: 'Use TypeScript for type-safe React development.',
      image: 'https://fakeimg.pl/300x180/?typescript'
    },
    {
      id: 12,
      name: 'Git & GitHub Mastery',
      description: 'Collaborate like a pro with Git and GitHub.',
      image: 'https://fakeimg.pl/300x180/?git,github'
    }
  ];

  return (
    <div className="container py-4">
      <h2 className="mb-4">Available Courses</h2>
      <div className="row">
        {courses.map(course => (
          <CourseCard
            key={course.id}
            title={course.name}
            description={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
