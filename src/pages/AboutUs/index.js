"use client";
import useCarousel from '../../hooks/useCarousel';
import styles from './style.module.scss';

const AboutUs = () => {
  const {
    professionals,
    currentIndex,
    isTransitioning,
    nextSlide,
    prevSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setCurrentIndex,
  } = useCarousel();

  return (
    <section className={styles.aboutUs}>
      <h2>Quem somos?</h2>
      <p>
        Nossos Profissionais não apenas tratam, eles entendem o funcionamento dos membros inferiores, identificam as patologias, indicam o melhor tratamento, informam os cuidados e acompanham.
      </p>
      <div 
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img src="/images/arrow-left.png" alt="Previous" className={styles.arrow} onClick={prevSlide} />
        <div className={`${styles.slide} ${isTransitioning ? styles['fade-exit'] : styles['fade-enter-active']}`}>
          <img src={professionals[currentIndex].image} alt={professionals[currentIndex].name} className={styles.photo} />
          <div className={styles.info}>
            <h3>{professionals[currentIndex].name}</h3>
            <p>{professionals[currentIndex].info}</p>
          </div>
        </div>
        <img src="/images/arrow-right.png" alt="Next" className={styles.arrow} onClick={nextSlide} />
      </div>
      <div className={styles.dots}>
        {professionals.map((_, index) => (
          <span key={index} className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`} onClick={() => setCurrentIndex(index)}></span>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
