import React, { useState } from 'react';
import { experience } from '../../data';
import SectionLabel from '../../components/ui/SectionLabel';
import styles from './Experience.module.css';

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section} id="exp">
      <SectionLabel>experience</SectionLabel>
      <div className={styles.list}>
        {experience.map((exp, i) => (
          <div
            key={i}
            className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className={styles.left}>
              <div className={styles.period}>{exp.period}</div>
              <div className={styles.index}>{String(i + 1).padStart(2, '0')}</div>
            </div>
            <div className={styles.right}>
              <div className={styles.company}>{exp.company}</div>
              <div className={styles.role}>{exp.role}</div>
              {open === i && (
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className={styles.toggle}>{open === i ? '−' : '+'}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
