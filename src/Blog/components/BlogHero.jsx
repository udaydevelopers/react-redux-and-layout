import React from 'react';

const blogPosts = [
  {
    image: 'assets/img/blog/blog-post-3.webp',
    date: 'Apr. 14th, 2025',
    category: 'Technology',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: 'blog-details.html',
    featured: true,
    delay: '0'
  },
  {
    image: 'assets/img/blog/blog-post-portrait-1.webp',
    date: 'Apr. 14th, 2025',
    category: 'Security',
    title: 'Sed do eiusmod tempor incididunt ut labore',
    link: 'blog-details.html',
    featured: false,
    delay: '100'
  },
  {
    image: 'assets/img/blog/blog-post-9.webp',
    date: 'Apr. 14th, 2025',
    category: 'Career',
    title: 'Ut enim ad minim veniam, quis nostrud exercitation',
    link: 'blog-details.html',
    featured: false,
    delay: '200'
  },
  {
    image: 'assets/img/blog/blog-post-7.webp',
    date: 'Apr. 14th, 2025',
    category: 'Cloud',
    title: 'Adipiscing elit, sed do eiusmod tempor incididunt',
    link: 'blog-details.html',
    featured: false,
    delay: '300'
  },
  {
    image: 'assets/img/blog/blog-post-6.webp',
    date: 'Apr. 14th, 2025',
    category: 'Programming',
    title: 'Excepteur sint occaecat cupidatat non proident',
    link: 'blog-details.html',
    featured: false,
    delay: '400'
  }
];

const BlogHero = () => {
  return (
    <section id="blog-hero" className="blog-hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`blog-item ${post.featured ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              <img src={post.image} alt="Blog Image" className="img-fluid" />
              <div className="blog-content">
                <div className="post-meta">
                  <span className="date">{post.date}</span>
                  <span className="category">{post.category}</span>
                </div>
                {post.featured ? (
                  <h2 className="post-title">
                    <a href={post.link} title={post.title}>{post.title}</a>
                  </h2>
                ) : (
                  <h3 className="post-title">
                    <a href={post.link} title={post.title}>{post.title}</a>
                  </h3>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
