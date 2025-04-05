import React from "react";

const Card = ({ title, text, imgSrc }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={imgSrc} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;
