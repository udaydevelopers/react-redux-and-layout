// components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {image && <img src={image} className="card-img-top" alt={title} />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
