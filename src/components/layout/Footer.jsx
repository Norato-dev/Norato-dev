import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} David Norato Ramírez — Bogotá, Colombia</p>
      <p>Built with React · TypeScript · ♥</p>
    </footer>
  );
}
