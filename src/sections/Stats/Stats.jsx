import React from 'react';
import { profile } from '../../data';
import styles from './Stats.module.css';

const stats = [
  { num: `${profile.years}+`, label: 'Years of experience', color: 'accent' },
  { num: `${profile.appsShipped}+`, label: 'Production apps shipped', color: 'accent2' },
  { num: '#3', label: 'Top Dev 2024 — BBVA', color: 'accent3' },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        {stats.map((s, i) => (
          <div className={styles.box} key={i}>
            <div className={styles.num} style={{ color: `var(--${s.color})` }}>
              {s.num}
            </div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
