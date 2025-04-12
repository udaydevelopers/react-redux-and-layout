import React from 'react';

const posts = [
  {
    id: 1,
    image: 'assets/img/blog/blog-post-1.webp',
    category: 'Politics',
    title: 'Dolorum optio tempore voluptas dignissimos',
    link: 'blog-details.html',
    authorImage: 'assets/img/person/person-f-12.webp',
    authorName: 'Maria Doe',
    date: 'Jan 1, 2022',
  },
  {
    id: 2,
    image: 'assets/img/blog/blog-post-2.webp',
    category: 'Sports',
    title: 'Nisi magni odit consequatur autem nulla dolorem',
    link: 'blog-details.html',
    authorImage: 'assets/img/person/person-f-13.webp',
    authorName: 'Allisa Mayer',
    date: 'Jun 5, 2022',
  },
  {
    id: 3,
    image: 'assets/img/blog/blog-post-3.webp',
    category: 'Entertainment',
    title: 'Possimus soluta ut id suscipit ea ut in quo quia et soluta',
    link: 'blog-details.html',
    authorImage: 'assets/img/person/person-m-10.webp',
    authorName: 'Mark Dower',
    date: 'Jun 22, 2022',
  },
  {
    id: 4,
    image: 'assets/img/blog/blog-post-4.webp',
    category: 'Sports',
    title: 'Non rem rerum nam cum quo minus olor distincti',
    link: 'blog-details.html',
    authorImage: 'assets/img/person/person-f-14.webp',
    authorName: 'Lisa Neymar',
    date: 'Jun 30, 2022',
  },
  {
    id: 5,
    image: 'assets/img/blog/blog-post-5.webp',
    category: 'Politics',
    title: 'Accusamus quaerat aliquam qui debitis facilis consequatur',
    link: 'blog-details.html',
    authorImage: 'assets/img/person/person-m-11.webp',
    authorName: 'Denis Peterson',
    date: 'Jan 30, 2022',
  },
  {
    id: 6,
    image: 'assets/img/blog/blog-post-6.webp',
    category: 'Entertainment',
    title: 'Distinctio provident quibusdam numquam aperiam aut',
    link: 'blog-details.html',
    authorImage: 'assets/img/person/person-f-15.webp',
    authorName: 'Mika Lendon',
    date: 'Feb 14, 2022',
  },
];

const LatestPosts = () => {
  return (
    <section id="latest-posts" className="latest-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Latest Posts</h2>
        <div>
          <span>Check Our</span> <span className="description-title">Latest Posts</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {posts.map(post => (
            <div key={post.id} className="col-lg-4">
              <article>
                <div className="post-img">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                </div>
                <p className="post-category">{post.category}</p>
                <h2 className="title">
                  <a href={post.link}>{post.title}</a>
                </h2>
                <div className="d-flex align-items-center">
                  <img src={post.authorImage} alt={post.authorName} className="img-fluid post-author-img flex-shrink-0" />
                  <div className="post-meta">
                    <p className="post-author">{post.authorName}</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">{post.date}</time>
                    </p>
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

export default LatestPosts;
