import React from 'react';
import { projects } from '../../data';
import SectionLabel from '../../components/ui/SectionLabel';
import styles from './Projects.module.css';

export default function Projects() {
  const isOdd = projects.length % 2 !== 0;

  return (
    <section className={styles.section} id="projects">
      <SectionLabel>personal projects</SectionLabel>
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            className={`${styles.card} ${isOdd && i === projects.length - 1 ? styles.cardWide : ''}`}
            data-num={p.num}
          >
            <div className={styles.bgNum}>{p.num}</div>
            <div className={styles.type}>{p.type}</div>
            <div className={styles.name}>{p.name}</div>
            <p className={styles.desc}>{p.description}</p>
            <div className={styles.footer}>
              <div className={styles.stack}>
                {p.stack.map((s, j) => (
                  <span key={j} className={styles.chip}>{s}</span>
                ))}
              </div>
              {p.repo && (
                <a
                  href={p.repo}
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
