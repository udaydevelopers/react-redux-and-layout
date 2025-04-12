// ScrollTopButton.jsx
import { useEffect } from 'react';

const ScrollTopButton = () => {
  useEffect(() => {
    const scrollTop = document.getElementById('scroll-top');

    if (!scrollTop) return;

    const handleClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollTop.addEventListener('click', handleClick);

    return () => scrollTop.removeEventListener('click', handleClick);
  }, []);

  return (
    <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default ScrollTopButton;
