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
          {/* TODO: Adınızı ve soyadınızı yazın */}
          <Translate id="homepage.hero.title">Adınız Soyadınız</Translate>
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.subtitle">
            Dağıtık sistemler ve backend mühendisliği üzerine çalışıyorum.
            Burada ürettiğim projeleri ve mühendislik yolculuğumdan notları
            paylaşıyorum.
          </Translate>
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/projects">
            <Translate id="homepage.hero.ctaProjects">Projelerimi Gör</Translate>
          </Link>
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
  'TypeScript',
  'Go',
  'Kubernetes',
  'PostgreSQL',
  'AWS',
  'gRPC',
  'Kafka',
  'React',
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
              TODO: Kendi teknoloji yığınınızı ve uzmanlık alanlarınızı yansıtacak
              şekilde bu listeyi güncelleyin.
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

function ProjectsSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2">
            <Translate id="homepage.projects.title">Öne Çıkan Projeler</Translate>
          </Heading>
          <p>
            <Translate id="homepage.projects.subtitle">
              Üzerinde çalıştığım seçme projelerden birkaçı. Tümü için Projeler
              sayfasına göz atabilirsiniz.
            </Translate>
          </p>
        </div>
        <div className={styles.grid}>
          <Link
            to="/projects/dagitik-gorev-kuyrugu"
            className="card--surface"
            style={{display: 'block', color: 'inherit', textDecoration: 'none'}}>
            <div className={styles.cardMeta}>Go · Kafka · PostgreSQL</div>
            <Heading as="h3" className={styles.cardTitle}>
              <Translate id="homepage.projects.item1.title">
                Dağıtık Görev Kuyruğu
              </Translate>
            </Heading>
            <p>
              <Translate id="homepage.projects.item1.description">
                Go ile yazılmış, at-least-once teslimat garantili, yatay
                ölçeklenebilir bir görev kuyruğu sistemi.
              </Translate>
            </p>
          </Link>
          <Link
            to="/projects/gozlemlenebilirlik-paneli"
            className="card--surface"
            style={{display: 'block', color: 'inherit', textDecoration: 'none'}}>
            <div className={styles.cardMeta}>TypeScript · React · Grafana</div>
            <Heading as="h3" className={styles.cardTitle}>
              <Translate id="homepage.projects.item2.title">
                Gözlemlenebilirlik Paneli
              </Translate>
            </Heading>
            <p>
              <Translate id="homepage.projects.item2.description">
                Mikroservisler için uçtan uca izleme, log ve metrik toplama
                sağlayan bir gözlemlenebilirlik platformu.
              </Translate>
            </p>
          </Link>
          <Link
            to="/projects/bu-site"
            className="card--surface"
            style={{display: 'block', color: 'inherit', textDecoration: 'none'}}>
            <div className={styles.cardMeta}>Docusaurus · React · CI/CD</div>
            <Heading as="h3" className={styles.cardTitle}>
              <Translate id="homepage.projects.item3.title">Bu Site</Translate>
            </Heading>
            <p>
              <Translate id="homepage.projects.item3.description">
                Docusaurus ile inşa edilmiş, i18n destekli mühendislik blogu ve
                kişisel portföy sitesi.
              </Translate>
            </p>
          </Link>
        </div>
        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <Link className="button button--primary" to="/projects">
            <Translate id="homepage.projects.viewAll">Tüm Projeleri Gör</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <Heading as="h2">
          <Translate id="homepage.cta.title">Birlikte çalışalım mı?</Translate>
        </Heading>
        <p>
          <Translate id="homepage.cta.subtitle">
            TODO: Kısa bir iletişim daveti ve tercih ettiğiniz iletişim kanalını
            buraya ekleyin.
          </Translate>
        </p>
        <Link className="button button--primary button--lg" to="/about#iletisim">
          <Translate id="homepage.cta.button">İletişime Geç</Translate>
        </Link>
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
        <ProjectsSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
