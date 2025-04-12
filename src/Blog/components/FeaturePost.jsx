import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const posts = [
    {
        id: 1,
        author: 'William G.',
        date: 'April 28, 2024',
        comments: '5 Comments',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        description: 'Discover the unseen world of health insights and explore groundbreaking research.',
        image: 'assets/img/blog/blog-post-6.webp',
      },
      {
        id: 2,
        author: 'Emma D.',
        date: 'May 30, 2024',
        comments: '8 Comments',
        title: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis',
        description: 'Learning redefined: dive into the essentials of modern education systems.',
        image: 'assets/img/blog/blog-post-7.webp',
      },
      {
        id: 3,
        author: 'James F.',
        date: 'June 3, 2024',
        comments: '12 Comments',
        title: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
        description: 'Gaming trends 2024: what the future holds for immersive digital adventures.',
        image: 'assets/img/blog/blog-post-5.webp',
      },
  {
    id: 4,
    author: 'Sarah L.',
    date: 'July 10, 2024',
    comments: '3 Comments',
    title: 'Amet consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    description: 'Tech advancements: how artificial intelligence is shaping the future.',
    image: 'assets/img/blog/blog-post-8.webp',
  },
  {
    id: 5,
    author: 'David R.',
    date: 'August 2, 2024',
    comments: '9 Comments',
    title: 'Aliquam erat volutpat. Donec viverra neque et est efficitur',
    description: 'Exploring new horizons in eco-friendly innovations.',
    image: 'assets/img/blog/blog-post-9.webp',
  },
  {
    id: 6,
    author: 'Sophia W.',
    date: 'September 15, 2024',
    comments: '15 Comments',
    title: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam',
    description: 'The importance of sustainable fashion in modern-day society.',
    image: 'assets/img/blog/blog-post-10.webp',
  }
];

const FeaturePost = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <section id="featured-posts" className="featured-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Posts</h2>
        <div>
          <span>Check Our</span> <span className="description-title">Featured Posts</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {posts.length === 0 ? (
          <div className="text-center p-10 text-gray-500">No featured posts available.</div>
        ) : (
          <div ref={sliderRef} className="keen-slider">
            {posts.map((post) => (
              <div className="keen-slider__slide" key={post.id}>
                <div className="blog-post-item">
                  <img src={post.image} alt="Blog" />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span><i className="bi bi-person"></i> {post.author}</span>
                      <span><i className="bi bi-clock"></i> {post.date}</span>
                      <span><i className="bi bi-chat-dots"></i> {post.comments}</span>
                    </div>
                    <h2><a href="#">{post.title}</a></h2>
                    <p>{post.description}</p>
                    <a href="#" className="read-more">Read More <i className="bi bi-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturePost;
