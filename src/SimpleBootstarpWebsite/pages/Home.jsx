import React, { useEffect, useState, useRef, useCallback } from "react";
import Card from "../components/Card";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  // Function to fetch data from API
  const fetchData = async () => {
    if (loading) return; // Prevent duplicate fetch calls
    setLoading(true);
    
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=6`);
      const data = await response.json();
      setCards((prevCards) => [...prevCards, ...data]); // Append new data
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to track scrolling (when user reaches bottom)
  const lastCardRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect(); // Disconnect previous observer

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1); // Load next page
      }
    });

    if (node) observer.current.observe(node);
  }, [loading]);

  // Fetch data when page number changes
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container mt-4">
      <h2>Home Page</h2>
      <div className="row pb-4">
        {cards.map((card, index) => (
          <div key={card.id} className="col-md-4 mb-4" ref={index === cards.length - 1 ? lastCardRef : null}>
            <Card title={card.title} text="Sample description." imgSrc={card.thumbnailUrl} />
          </div>
        ))}
      </div>
      {loading && <p>Loading more images...</p>}
    </div>
  );
};

export default Home;
