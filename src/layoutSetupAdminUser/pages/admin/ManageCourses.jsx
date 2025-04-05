import { useState } from "react";

const ManageCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "React Basics" },
    { id: 2, name: "Advanced Redux" }
  ]);

  return (
    <div className="manage-courses">
      <h2>Manage Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCourses;