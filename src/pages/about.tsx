import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import Heading from '@theme/Heading';

import styles from './about.module.css';

export default function About(): ReactNode {
  useBrokenLinks().collectAnchor('iletisim');
  return (
    <Layout
      title={translate({id: 'about.meta.title', message: 'Hakkımda'})}
      description={translate({
        id: 'about.meta.description',
        message: 'Deneyim, yetenekler ve iletişim bilgileri.',
      })}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">
            <Translate id="about.experience.title">Deneyim</Translate>
          </Heading>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp1.period">Nisan 2024 — Günümüz</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp1.role">Senior Software Engineer</Translate>
                {' · '}
                <Translate id="about.exp1.company">OBSS</Translate>
              </Heading>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp2.period">Mart 2022 — Ocak 2024</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp2.role">Senior Software Engineer</Translate>
                {' · '}
                <Translate id="about.exp2.company">Accenture</Translate>
              </Heading>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp3.period">Şubat 2021 — Mart 2022</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp3.role">Software Engineer</Translate>
                {' · '}
                <Translate id="about.exp3.company">OBSS</Translate>
              </Heading>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp4.period">Ekim 2019 — Şubat 2021</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp4.role">Software Engineer</Translate>
                {' · '}
                <Translate id="about.exp4.company">Etiya</Translate>
              </Heading>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">
            <Translate id="about.education.title">Eğitim</Translate>
          </Heading>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.education1.period">2013 — 2018</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.education1.degree">
                  Bilgisayar Mühendisliği (B.Sc.)
                </Translate>
                {' · '}
                <Translate id="about.education1.school">
                  Karabük Üniversitesi
                </Translate>
              </Heading>
              <p>
                <Translate id="about.education1.description">
                  %100 İngilizce eğitim, GPA: 3.26/4.00.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">
            <Translate id="about.skills.title">Yetenekler</Translate>
          </Heading>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>
              <Translate id="about.skills.languages">Diller & Frameworkler</Translate>
            </strong>
            <div className={styles.pillRow}>
              {[
                'Java',
                'JavaScript',
                'Python',
                'Spring Boot',
                'Spring Data JPA',
                'React',
                'Angular',
                'Node.js',
                'Express.js',
              ].map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>
              <Translate id="about.skills.infra">Platform & Araçlar</Translate>
            </strong>
            <div className={styles.pillRow}>
              {[
                'Azure',
                'Azure DevOps',
                'Kubernetes',
                'Docker',
                'Docker Compose',
                'Jenkins',
                'Bamboo',
                'NGINX',
                'ELK',
                'JIRA',
              ].map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>
              <Translate id="about.skills.data">Veritabanları</Translate>
            </strong>
            <div className={styles.pillRow}>
              {['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle', 'Couchbase'].map(
                (item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="iletisim">
        <div className="container">
          <div className={styles.contactCard}>
            <Heading as="h2">
              <Translate id="about.contact.title">İletişim</Translate>
            </Heading>
            <div className={styles.contactLinks}>
              <a
                className="button button--primary"
                href="mailto:alikaanbaci@gmail.com">
                <Translate id="about.contact.email">E-posta Gönder</Translate>
              </a>
              <a
                className="button button--outline button--secondary"
                href="https://github.com/alikaanbaci"
                target="_blank"
                rel="noreferrer">
                GitHub
              </a>
              <a
                className="button button--outline button--secondary"
                href="https://www.linkedin.com/in/alikaanbaci"
                target="_blank"
                rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
