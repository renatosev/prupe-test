"use client";
import { useState, useEffect } from 'react';
import styles from './style.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li><a href="#">Início</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Espaço</a></li>
        <li><a href="#">Contato</a></li>
        <li className={styles.closeMenu} onClick={toggleMenu}>X</li>
      </ul>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>
    </nav>
  );
};

export default Navbar;
