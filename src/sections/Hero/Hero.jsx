import React, { useState, useEffect } from 'react';
import { profile } from '../../data';
import styles from './Hero.module.css';

const terminalLines = [
  { key: '"role"', value: `"${profile.role}"`, color: 'str' },
  { key: '"years"', value: `${profile.years}`, color: 'num' },
  { key: '"stack"', value: '["React", "TypeScript", "Next.js"]', color: 'str' },
  // { key: '"award"', value: `"${profile.award}"`, color: 'str' },
  { key: '"available"', value: 'true', color: 'num' },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((v) => {
        if (v >= terminalLines.length) {
          clearInterval(timer);
          return v;
        }
        return v + 1;
      });
    }, 220);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="about">
      <div className={styles.bgNum}>5+</div>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.tag}>Frontend Engineer — Bogotá, CO</div>
          <h1 className={styles.heading}>
            David<br />
            <span className={styles.accent}>Norato</span><br />
            Ramírez
          </h1>
          <p className={styles.desc}>
            Senior frontend dev con 5+ años construyendo<br />
            apps web escalables con React & TypeScript.<br />
            Experto en performance, arquitectura y design systems.
          </p>
          <div className={styles.cta}>
            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => scrollTo('contact')}>
              Let's talk
            </button>
            <button className={`${styles.btn} ${styles.btnOutline}`} onClick={() => scrollTo('exp')}>
              See my work
            </button>
          </div>
        </div>

        <div className={styles.terminal}>
          <div className={styles.termBar}>
            <span className={`${styles.dot} ${styles.dotR}`} />
            <span className={`${styles.dot} ${styles.dotY}`} />
            <span className={`${styles.dot} ${styles.dotG}`} />
            <span className={styles.termTitle}>profile.json</span>
          </div>
          <div className={styles.termBody}>
            <span className={styles.muted}>{'{'}</span>
            <br />
            {terminalLines.map((line, i) => (
              <React.Fragment key={i}>
                {i < visibleLines && (
                  <>
                    &nbsp;&nbsp;
                    <span className={styles.key}>"{line.key.replace(/"/g, '')}"</span>
                    <span className={styles.muted}>: </span>
                    <span className={line.color === 'str' ? styles.str : styles.num}>
                      {line.value}
                    </span>
                    {i < terminalLines.length - 1 && <span className={styles.muted}>,</span>}
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
            <span className={styles.muted}>{'}'}</span>
            {visibleLines <= terminalLines.length && <span className={styles.cursor} />}
          </div>
        </div>
      </div>
    </section>
  );
}
