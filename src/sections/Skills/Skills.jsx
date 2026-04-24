import React from 'react';
import { skills } from '../../data';
import SectionLabel from '../../components/ui/SectionLabel';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionLabel>tech stack</SectionLabel>
      <div className={styles.grid}>
        {skills.map((cat, i) => (
          <div
            key={i}
            className={`${styles.cat} ${cat.wide ? styles.wide : ''}`}
          >
            <div className={styles.catName}>{cat.category}</div>
            <div className={styles.tags}>
              {cat.items.map((item, j) => (
                <span key={j} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
