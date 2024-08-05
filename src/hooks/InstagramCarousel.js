import React, { useEffect, useState, useRef } from 'react';
import { fetchInstagramPosts } from '../hooks/instagramApi';

const InstagramCarousel = () => {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  let touchStartX = 0;
  let touchEndX = 0;

  useEffect(() => {
    const getPosts = async () => {
      const data = await fetchInstagramPosts();
      setPosts(data);
      setCurrentIndex(Math.floor(data.length / 2)); // centralizacao
    };
    getPosts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  const selectSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }

    if (touchStartX - touchEndX < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchmove', handleTouchMove);
      carousel.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchmove', handleTouchMove);
        carousel.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [posts]);

  return {
    posts,
    currentIndex,
    nextSlide,
    prevSlide,
    selectSlide,
    carouselRef,
  };
};

export default InstagramCarousel;
