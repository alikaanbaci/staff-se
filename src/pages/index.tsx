import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHero() {
  return (
    <header className={clsx('hero', 'hero--navy')}>
      <div className="container">
        <span className="badge--navy">
          <Translate id="homepage.hero.badge">Software Engineer</Translate>
        </span>
        <Heading as="h1" className="hero__title">
          <Translate id="homepage.hero.title">Ali Kaan Bacı</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            Backend mühendisliği, sistem tasarımı ve performans üzerine
            yazdığım teknik notlar: mikroservis mimarileri, Kafka ve
            veritabanı performansından pratik notlar.
          </Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--outline button--secondary button--lg" to="/blog">
            <Translate id="homepage.hero.ctaBlog">Bloga Git</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

type Skill = string;

const skills: Skill[] = [
  'Java',
  'Spring Boot',
  'React',
  'PostgreSQL',
  'MongoDB',
  'Kubernetes',
  'Azure',
  'Docker',
];

function SkillsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2">
            <Translate id="homepage.skills.title">Kullandığım Teknolojiler</Translate>
          </Heading>
          <p>
            <Translate id="homepage.skills.subtitle">
              Günlük işimde ve yan projelerimde en çok kullandığım diller,
              framework'ler ve altyapı araçları.
            </Translate>
          </p>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <div key={skill} className={styles.skillTag}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Ana Sayfa',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message:
          'Yazılım mühendisliği projeleri, mühendislik blogu ve kişisel portföy.',
      })}>
      <HomepageHero />
      <main>
        <SkillsSection />
      </main>
    </Layout>
  );
}
