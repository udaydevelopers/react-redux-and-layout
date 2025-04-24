import React from 'react'

const About = () => {
  return (
    <div className="page-title">
    <div className="breadcrumbs">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#"><i className="bi bi-house"></i> About</a></li>
          <li className="breadcrumb-item"><a href="#">Category</a></li>
          <li className="breadcrumb-item active current">About</li>
        </ol>
      </nav>
    </div>

    <div className="title-wrapper">
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
  </div>
  )
}

export default About