"use client";
import React from 'react';
import InstagramCarousel from '../../hooks/InstagramCarousel';
import styles from './style.module.scss';

const InstagramPage = () => {
  const { posts, currentIndex, nextSlide, prevSlide, selectSlide, carouselRef } = InstagramCarousel();

  if (!posts.length) return <div></div>;

  const visiblePosts = [
    posts[(currentIndex - 2 + posts.length) % posts.length],
    posts[(currentIndex - 1 + posts.length) % posts.length],
    posts[currentIndex],
    posts[(currentIndex + 1) % posts.length],
    posts[(currentIndex + 2) % posts.length],
  ];

  const handleClick = (index) => {
    const newIndex = (currentIndex + index - 2 + posts.length) % posts.length;
    if (newIndex === currentIndex) {
      window.open(posts[currentIndex].permalink, '_blank');
    } else {
      selectSlide(newIndex);
    }
  };

  return (
    <div className={styles.carouselContainer} ref={carouselRef}>
      <h2 className={styles.title}>Instagram</h2>
      <div className={styles.carousel}>
        <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
          <img src="/images/arrow-left.png" alt="Previous" />
        </button>
        
        <div className={styles.carouselInner}>
          {visiblePosts.map((post, index) => (
            <div
              key={post.id}
              className={`${styles.slide} ${index === 2 ? styles.active : ''}`}
              onClick={() => handleClick(index)}
            >
              <img src={post.media_url} alt={post.caption} />
            </div>
          ))}
        </div>
        
        <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
          <img src="/images/arrow-right.png" alt="Next" />
        </button>

        <div className={styles.dots}>
          {posts.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => selectSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramPage;
