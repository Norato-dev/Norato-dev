import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const links = [
  { label: 'about', id: 'about' },
  { label: 'experience', id: 'exp' },
  { label: 'stack', id: 'skills' },
  { label: 'projects', id: 'projects' },
  { label: 'contact', id: 'contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>// davidnorato.dev</div>
      <ul className={styles.links}>
        {links.map(({ label, id }) => (
          <li key={id}>
            <button
              className={`${styles.link} ${active === id ? styles.active : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
