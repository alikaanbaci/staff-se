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
      <header className={styles.header}>
        <div className="container">
          <Heading as="h1">
            <Translate id="about.title">Hakkımda</Translate>
          </Heading>
          <p style={{maxWidth: 720, fontSize: '1.1rem'}}>
            <Translate id="about.intro">
              TODO: Kendinizi 3-4 cümlede tanıtan bir özet yazın — kimsiniz, ne
              üzerine çalışıyorsunuz, hangi problemler ilginizi çekiyor.
            </Translate>
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">
            <Translate id="about.experience.title">Deneyim</Translate>
          </Heading>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp1.period">2023 — Günümüz</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp1.role">Kıdemli Yazılım Mühendisi</Translate>
                {' · '}
                <Translate id="about.exp1.company">TODO: Şirket Adı</Translate>
              </Heading>
              <p>
                <Translate id="about.exp1.description">
                  TODO: Bu roldeki sorumluluklarınızı, kullandığınız
                  teknolojileri ve elde ettiğiniz somut sonuçları yazın.
                </Translate>
              </p>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp2.period">2020 — 2023</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp2.role">Yazılım Mühendisi</Translate>
                {' · '}
                <Translate id="about.exp2.company">TODO: Şirket Adı</Translate>
              </Heading>
              <p>
                <Translate id="about.exp2.description">
                  TODO: Bu roldeki sorumluluklarınızı, kullandığınız
                  teknolojileri ve elde ettiğiniz somut sonuçları yazın.
                </Translate>
              </p>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMeta}>
                <Translate id="about.exp3.period">2018 — 2020</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp3.role">Yazılım Mühendisi</Translate>
                {' · '}
                <Translate id="about.exp3.company">
                  TODO: Şirket / Üniversite
                </Translate>
              </Heading>
              <p>
                <Translate id="about.exp3.description">
                  TODO: Kariyerinizin başlangıcına dair kısa bir özet ekleyin.
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
              <Translate id="about.skills.languages">Diller</Translate>
            </strong>
            <div className={styles.pillRow}>
              {['Go', 'TypeScript', 'Python', 'Java'].map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>
              <Translate id="about.skills.infra">Altyapı</Translate>
            </strong>
            <div className={styles.pillRow}>
              {['Kubernetes', 'AWS', 'Terraform', 'Docker'].map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <strong>
              <Translate id="about.skills.data">Veri</Translate>
            </strong>
            <div className={styles.pillRow}>
              {['PostgreSQL', 'Kafka', 'Redis', 'Elasticsearch'].map((item) => (
                <span key={item} className={styles.pill}>
                  {item}
                </span>
              ))}
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
            <p>
              <Translate id="about.contact.subtitle">
                TODO: Kısa bir iletişim daveti yazın — yeni fırsatlara, işbirliğine
                veya sohbete açık olup olmadığınızı belirtin.
              </Translate>
            </p>
            <div className={styles.contactLinks}>
              <a className="button button--primary" href="mailto:TODO@example.com">
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
                href="https://www.linkedin.com/in/TODO"
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
