import React from 'react';

const featuredPosts = [
  {
    id: 1,
    image: "assets/img/blog/blog-post-6.webp",
    category: "Health",
    authorImg: "assets/img/person/person-f-13.webp",
    authorName: "William G.",
    date: "28 April 2024",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
  },
  {
    id: 2,
    image: "assets/img/blog/blog-post-7.webp",
    category: "Education",
    authorImg: "assets/img/person/person-m-10.webp",
    authorName: "Emma D.",
    date: "30 May 2024",
    title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis",
  },
  {
    id: 3,
    image: "assets/img/blog/blog-post-5.webp",
    category: "Gaming",
    authorImg: "assets/img/person/person-f-14.webp",
    authorName: "James F.",
    date: "3 June 2024",
    title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
  },
];

const listPosts = [
  {
    id: 1,
    image: "assets/img/blog/blog-post-6.webp",
    category: "Gaming",
    title: "Quis autem vel eum iure reprehenderit qui in ea voluptate",
    readTime: "2 mins read",
    date: "6 April 2026",
  },
  {
    id: 2,
    image: "assets/img/blog/blog-post-9.webp",
    category: "Gaming",
    title: "At vero eos et accusamus et iusto",
    readTime: "2 mins read",
    date: "12 June 2026",
  },
  {
    id: 3,
    image: "assets/img/blog/blog-post-10.webp",
    category: "Gaming",
    title: "Et harum quidem rerum facilis est et expedita distinctio",
    readTime: "2 mins read",
    date: "9 May 2026",
  },
  {
    id: 4,
    image: "assets/img/blog/blog-post-2.webp",
    category: "Gaming",
    title: "Nam libero tempore, cum soluta nobis est eligendi",
    readTime: "2 mins read",
    date: "15 July 2026",
  },
  {
    id: 5,
    image: "assets/img/blog/blog-post-1.webp",
    category: "Gaming",
    title: "Temporibus autem quibusdam et aut officiis debitis",
    readTime: "2 mins read",
    date: "18 August 2026",
  },
  {
    id: 6,
    image: "assets/img/blog/blog-post-3.webp",
    category: "Gaming",
    title: "Itaque earum rerum hic tenetur a sapiente delectus",
    readTime: "2 mins read",
    date: "21 September 2026",
  },
];

const CategorySection = () => {
  return (
    <section id="category-section" className="category-section section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Category Section</h2>
        <div><span className="description-title">Category Section</span></div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 mb-4">
          {featuredPosts.map(post => (
            <div className="col-lg-4" key={post.id}>
              <article className="featured-post">
                <div className="post-img">
                  <img src={post.image} alt="" className="img-fluid" loading="lazy" />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">{post.category}</span>
                    <div className="author-meta">
                      <img src={post.authorImg} alt="" className="author-img" />
                      <span className="author-name">{post.authorName}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                  </div>
                  <h2 className="title">
                    <a href="blog-details.html">{post.title}</a>
                  </h2>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="row">
          {listPosts.map(post => (
            <div className="col-xl-4 col-lg-6" key={post.id}>
              <article className="list-post">
                <div className="post-img">
                  <img src={post.image} alt="" className="img-fluid" loading="lazy" />
                </div>
                <div className="post-content">
                  <div className="category-meta">
                    <span className="post-category">{post.category}</span>
                  </div>
                  <h3 className="title">
                    <a href="blog-details.html">{post.title}</a>
                  </h3>
                  <div className="post-meta">
                    <span className="read-time">{post.readTime}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
