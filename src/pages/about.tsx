import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

import styles from './about.module.css';

type Role = {
  initials: string;
  role: ReactNode;
  company: string;
  period: ReactNode;
  summary: ReactNode;
};

// Yeniden eskiye; ilki (güncel rol) accent renkle vurgulanır.
const experience: Role[] = [
  {
    initials: 'OB',
    role: <Translate id="about.exp1.role">Senior Software Engineer</Translate>,
    company: 'OBSS',
    period: <Translate id="about.exp1.period">Nis 2024 — Günümüz</Translate>,
    summary: (
      <Translate id="about.exp1.summary">
        Java, Spring Boot, Kafka ve Kubernetes üzerinde ödeme sistemleri —
        event-driven mikroservisler, batch mutabakat ve uzun soluklu core
        geliştirmeler.
      </Translate>
    ),
  },
  {
    initials: 'AC',
    role: <Translate id="about.exp2.role">Senior Software Engineer</Translate>,
    company: 'Accenture',
    period: <Translate id="about.exp2.period">Mar 2022 — Oca 2024</Translate>,
    summary: (
      <Translate id="about.exp2.summary">
        Azure ve Kubernetes üzerinde, Couchbase ile çalışan bir IoT platformu.
      </Translate>
    ),
  },
  {
    initials: 'OB',
    role: <Translate id="about.exp3.role">Software Engineer</Translate>,
    company: 'OBSS',
    period: <Translate id="about.exp3.period">Şub 2021 — Mar 2022</Translate>,
    summary: (
      <Translate id="about.exp3.summary">
        Şirket içi mobil ve web platformunun yeniden inşası — Java, Spring Boot
        ve MongoDB ile yeniden kullanılabilir backend mimarisi.
      </Translate>
    ),
  },
  {
    initials: 'ET',
    role: <Translate id="about.exp4.role">Software Engineer</Translate>,
    company: 'Etiya',
    period: <Translate id="about.exp4.period">Eki 2019 — Şub 2021</Translate>,
    summary: (
      <Translate id="about.exp4.summary">
        Multi-tenant müşteri şikâyet ve servis yönetimi platformu — Java,
        Spring Boot, Oracle ve Angular.
      </Translate>
    ),
  },
];

const toolbox: {title: ReactNode; items: string[]}[] = [
  {
    title: (
      <Translate id="about.skills.languages">Diller & framework'ler</Translate>
    ),
    items: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'JavaScript',
      'Node.js',
      'Python',
      'React',
      'Angular',
    ],
  },
  {
    title: <Translate id="about.skills.infra">Altyapı</Translate>,
    items: [
      'Kafka',
      'Kubernetes',
      'Docker',
      'Azure',
      'Azure DevOps',
      'Jenkins',
      'NGINX',
      'ELK',
    ],
  },
  {
    title: <Translate id="about.skills.data">Veri</Translate>,
    items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Couchbase'],
  },
];

function SectionHeading({eyebrow, title}: {eyebrow: ReactNode; title: ReactNode}) {
  return (
    <div className={styles.sectionHeading}>
      <div className="ak-eyebrow">{eyebrow}</div>
      <Heading as="h2" className={styles.sectionTitle}>
        {title}
      </Heading>
    </div>
  );
}

function Fact({label, children}: {label: ReactNode; children: ReactNode}) {
  return (
    <div className={styles.fact}>
      <span className={styles.factLabel}>{label}</span>
      <span>{children}</span>
    </div>
  );
}

function Profile() {
  return (
    <section className={styles.profileSection}>
      <div className={clsx('container', 'ak-grid', styles.profile)}>
        <div className={styles.profileText}>
          <img
            className={styles.avatar}
            src="https://github.com/alikaanbaci.png"
            alt="Ali Kaan Bacı"
            width={96}
            height={96}
          />
          <Heading as="h1" className={styles.name}>
            Ali Kaan Bacı
          </Heading>
          <div className={styles.headline}>
            <Translate id="about.hero.headline">
              Senior Software Engineer · Backend & Dağıtık Sistemler
            </Translate>
          </div>
          <p className={styles.intro}>
            <Translate id="about.hero.intro">
              Event-driven, Kubernetes tabanlı mimarilerde Java ve Spring Boot
              servisleri tasarlayıp geliştiriyorum — son olarak güvenilirlik ve
              veri tutarlılığının pazarlık konusu olmadığı ödeme sistemlerinde.
              Bu site öğrendiklerimi yazıya döktüğüm yer: tasarım kararları,
              benchmark'lar ve production'dan dersler.
            </Translate>
          </p>
          <div className={styles.actions}>
            <a className="ak-btn ak-btn--primary" href="mailto:alikaanbaci@gmail.com">
              <Translate id="about.hero.contact">İletişime geç</Translate>
            </a>
          </div>
        </div>
        <div className={styles.facts}>
          <div className={styles.factsTitle}>
            <Translate id="about.facts.title">Kısaca</Translate>
          </div>
          <Fact label={<Translate id="about.facts.location">Konum</Translate>}>
            <Translate id="about.facts.locationValue">İstanbul, Türkiye</Translate>
          </Fact>
          <Fact label={<Translate id="about.facts.current">Şu an</Translate>}>
            OBSS
          </Fact>
          <Fact label={<Translate id="about.facts.domain">Alan</Translate>}>
            <Translate id="about.facts.domainValue">Ödeme sistemleri</Translate>
          </Fact>
          <Fact label="GitHub">
            <a href="https://github.com/alikaanbaci">alikaanbaci ↗</a>
          </Fact>
          <Fact label="LinkedIn">
            <a href="https://www.linkedin.com/in/alikaanbaci">in/alikaanbaci ↗</a>
          </Fact>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className={styles.section}>
      <div className="container ak-grid">
        <SectionHeading
          eyebrow={<Translate id="about.experience.eyebrow">Deneyim</Translate>}
          title={<Translate id="about.experience.title">Çalıştığım yerler</Translate>}
        />
        <ol className={styles.content}>
          {experience.map((r, i) => (
            <li key={i} className={styles.item}>
              <div className={clsx(styles.badge, i === 0 && styles.badgeCurrent)}>
                {r.initials}
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemHead}>
                  <Heading as="h3" className={styles.itemTitle}>
                    {r.role}
                  </Heading>
                  <span className={styles.period}>{r.period}</span>
                </div>
                <div className={clsx(styles.company, i === 0 && styles.companyCurrent)}>
                  {r.company}
                </div>
                <p className={styles.summary}>{r.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Toolbox() {
  return (
    <section className={clsx(styles.section, styles.surfaceSection)}>
      <div className="container ak-grid">
        <SectionHeading
          eyebrow={<Translate id="about.skills.eyebrow">Yetenekler</Translate>}
          title={<Translate id="about.skills.title">Araç kutusu</Translate>}
        />
        <div className={clsx(styles.content, styles.toolbox)}>
          {toolbox.map((group, i) => (
            <div key={i} className={styles.toolCard}>
              <Heading as="h3" className={styles.toolTitle}>
                {group.title}
              </Heading>
              <div className={styles.chips}>
                {group.items.map((item) => (
                  <span key={item} className={styles.chip}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className={clsx(styles.section, styles.bordered)}>
      <div className="container ak-grid">
        <SectionHeading
          eyebrow={<Translate id="about.education.eyebrow">Eğitim</Translate>}
          title={<Translate id="about.education.title">Akademik geçmiş</Translate>}
        />
        <div className={clsx(styles.content, styles.item)}>
          <div className={styles.badge}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true">
              <path d="M2 9l10-5 10 5-10 5z" />
              <path d="M6 11v5c3 2 9 2 12 0v-5" />
            </svg>
          </div>
          <div className={styles.itemBody}>
            <div className={styles.itemHead}>
              <Heading as="h3" className={styles.itemTitle}>
                <Translate id="about.education1.degree">
                  Bilgisayar Mühendisliği (B.Sc.)
                </Translate>
              </Heading>
              <span className={styles.period}>2013 — 2018</span>
            </div>
            <div className={styles.company}>
              <Translate id="about.education1.school">
                Karabük Üniversitesi · %100 İngilizce eğitim
              </Translate>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  useBrokenLinks().collectAnchor('iletisim');
  return (
    <section className={styles.ctaSection} id="iletisim">
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <Heading as="h2" className={styles.ctaTitle}>
              <Translate id="about.contact.title">Backend konuşalım.</Translate>
            </Heading>
            <p className={styles.ctaBody}>
              <Translate id="about.contact.body">
                Dağıtık sistemler, performans çalışmaları ve mühendislik rolleri
                üzerine sohbete açığım.
              </Translate>
            </p>
          </div>
          <div className={styles.actions}>
            <a className="ak-btn ak-btn--light" href="mailto:alikaanbaci@gmail.com">
              <Translate id="about.contact.email">E-posta gönder</Translate>
            </a>
            <a
              className="ak-btn ak-btn--ghost"
              href="https://www.linkedin.com/in/alikaanbaci">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About(): ReactNode {
  return (
    <Layout
      title={translate({id: 'about.meta.title', message: 'Hakkımda'})}
      description={translate({
        id: 'about.meta.description',
        message: 'Deneyim, yetenekler ve iletişim bilgileri.',
      })}>
      <main>
        <Profile />
        <Experience />
        <Toolbox />
        <Education />
        <Contact />
      </main>
    </Layout>
  );
}
