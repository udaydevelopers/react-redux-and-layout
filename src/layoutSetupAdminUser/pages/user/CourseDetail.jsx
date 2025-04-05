import { useParams } from "react-router-dom";
import './Course.css';

const CourseDetail = () => {
  const { id } = useParams();
  const courses = [
    { id: 1, name: "React Basics", description: "Learn the basics of React." },
    { id: 2, name: "Node.js Fundamentals", description: "Understand Node.js concepts." },
    { id: 3, name: "Advanced Redux", description: "Master Redux for state management." }
  ];

  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    <div className="course-detail container">
      <h2>{course.name}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetail;