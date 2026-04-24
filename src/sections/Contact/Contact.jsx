import React from 'react';
import { profile } from '../../data';
import SectionLabel from '../../components/ui/SectionLabel';
import styles from './Contact.module.css';

const links = [
  { icon: '@', label: profile.email, href: `mailto:${profile.email}` },
  { icon: 'in', label: 'linkedin.com/in/davidnorato', href: profile.linkedin },
  { icon: '</>', label: 'github.com/davidnorato', href: profile.github },
  { icon: '✆', label: profile.phone, href: `tel:${profile.phone}` },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <SectionLabel>contact</SectionLabel>
      <div className={styles.grid}>
        <div>
          <div className={styles.big}>
            Let's build<br />
            something<br />
            <span className={styles.accent}>great.</span>
          </div>
        </div>
        <div className={styles.linkList}>
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className={styles.link}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <span className={styles.icon}>{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
