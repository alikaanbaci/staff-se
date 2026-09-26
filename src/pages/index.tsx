import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Translate, {translate} from '@docusaurus/Translate';

import {readingTimeLabel, useBlogPosts, useFormatDate} from '@site/src/data/blog';
import styles from './index.module.css';

const heroStack = ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL'];

const dailyStack = [
  'Java',
  'Spring Boot',
  'Kafka',
  'PostgreSQL',
  'Kubernetes',
  'Docker',
  'Azure',
  'MongoDB',
];

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={clsx('container', 'ak-grid', styles.hero)}>
        <div className={styles.heroText}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot} aria-hidden="true" />
            <Translate id="homepage.hero.badge">
              Senior Software Engineer · İstanbul
            </Translate>
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            <Translate
              id="homepage.hero.title"
              values={{
                br: <br />,
                accent: (
                  <span className={styles.accent}>
                    <Translate id="homepage.hero.titleAccent">
                      ölçekte güvenilir.
                    </Translate>
                  </span>
                ),
              }}>
              {'Backend sistemleri,{br}{accent}'}
            </Translate>
          </Heading>
          <p className={styles.heroLead}>
            <Translate id="homepage.hero.subtitle">
              Ben Ali Kaan. Java, Spring Boot ve Kafka ile event-driven
              servisler tasarlıyor; sistem tasarımı, performans ve
              production'da gerçekte neler olduğu üzerine yazıyorum.
            </Translate>
          </p>
          <div className={styles.actions}>
            <Link className="ak-btn ak-btn--primary" to="/blog">
              <Translate id="homepage.hero.ctaBlog">Bloga göz at</Translate>
              <span aria-hidden="true">→</span>
            </Link>
            <Link className="ak-btn ak-btn--secondary" to="/about">
              <Translate id="homepage.hero.ctaAbout">Hakkımda</Translate>
            </Link>
          </div>
        </div>
        <CodeCard />
      </div>
    </section>
  );
}

function CodeCard() {
  return (
    <div className={styles.codeCard}>
      <div className={styles.codeBar}>
        <div className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className={styles.fileName}>OutboxPublisher.java</span>
        <span className={styles.dotsSpacer} />
      </div>
      <pre className={styles.code}>
        <span className={styles.c1}>@Transactional</span>
        {'\n'}
        <span className={styles.c2}>public void</span>{' '}
        <span className={styles.cText}>place</span>(Payment p) {'{'}
        {'\n  payments.save(p);\n  outbox.save('}
        <span className={styles.c2}>new</span>{' '}
        <span className={styles.cText}>Event</span>(
        {'\n    '}
        <span className={styles.c3}>"payment.created"</span>, p.id()));
        {'\n}\n\n'}
        <span className={styles.cFaint}>// relay → Kafka, at-least-once,</span>
        {'\n'}
        <span className={styles.cFaint}>// idempotent consumers downstream</span>
      </pre>
      <div className={styles.codeStack}>
        {heroStack.map((s) => (
          <span key={s} className={styles.stackChip}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function LatestPosts() {
  const posts = useBlogPosts().slice(0, 3);
  const formatDate = useFormatDate();
  if (posts.length === 0) {
    return null;
  }
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHead}>
          <div className={styles.headingGroup}>
            <div className="ak-eyebrow">
              <Translate id="homepage.posts.eyebrow">Son yazılar</Translate>
            </div>
            <Heading as="h2" className={styles.sectionTitle}>
              <Translate id="homepage.posts.title">Güncel yazılar</Translate>
            </Heading>
          </div>
          <Link className="ak-btn ak-btn--secondary ak-btn--sm" to="/blog">
            <Translate id="homepage.posts.viewAll">Tüm yazılar →</Translate>
          </Link>
        </div>
        <div className={styles.cardGrid}>
          {posts.map((post) => (
            <Link
              key={post.permalink}
              to={post.permalink}
              className={clsx('ak-card-link', styles.postCard)}>
              <div className={styles.tagRow}>
                {post.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={tag.permalink}
                    className={clsx('ak-tag', i > 0 && 'ak-tag--muted')}>
                    {tag.label}
                  </span>
                ))}
              </div>
              <Heading as="h3" className={styles.postTitle}>
                {post.title}
              </Heading>
              <p className={styles.postSummary}>{post.description}</p>
              <div className={styles.postMeta}>
                <span>{formatDate(post.date)}</span>
                <span>{readingTimeLabel(post.readingTime)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type Focus = {icon: ReactNode; title: ReactNode; body: ReactNode};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

const focusAreas: Focus[] = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="8.5" y="14" width="7" height="7" rx="1.5" />
        <path d="M6.5 10v2h11v-2M12 12v2" />
      </svg>
    ),
    title: <Translate id="homepage.focus.design.title">Sistem tasarımı</Translate>,
    body: (
      <Translate id="homepage.focus.design.body">
        Hata altında da doğru çalışmaya devam eden pipeline ve servisler —
        partitioning, restart edilebilirlik, idempotency ve tutarlılık
        trade-off'ları.
      </Translate>
    ),
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </svg>
    ),
    title: <Translate id="homepage.focus.perf.title">Performans</Translate>,
    body: (
      <Translate id="homepage.focus.perf.body">
        Önce ölç, sonra optimize et — JPA ve Hibernate tuzakları, sorgu
        şekilleri ve PostgreSQL davranışı, benchmark verileriyle.
      </Translate>
    ),
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="5" cy="12" r="2" />
        <circle cx="19" cy="5" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M7 12h5M12 12l5-6M12 12l5 6" />
      </svg>
    ),
    title: (
      <Translate id="homepage.focus.events.title">Event-driven sistemler</Translate>
    ),
    body: (
      <Translate id="homepage.focus.events.body">
        Production'da Kafka: mimari, önemli olan konfigürasyonlar ve
        transactional outbox gibi desenler.
      </Translate>
    ),
  },
];

function FocusAreas() {
  return (
    <section className={clsx(styles.section, styles.surfaceSection)}>
      <div className={clsx('container', styles.focusInner)}>
        <div className={clsx(styles.headingGroup, styles.narrow)}>
          <div className="ak-eyebrow">
            <Translate id="homepage.focus.eyebrow">Odak alanları</Translate>
          </div>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="homepage.focus.title">
              Üzerinde çalıştığım ve yazdığım konular
            </Translate>
          </Heading>
        </div>
        <div className={styles.cardGrid}>
          {focusAreas.map((f, i) => (
            <div key={i} className={styles.focusCard}>
              <div className={styles.focusIcon}>{f.icon}</div>
              <Heading as="h3" className={styles.focusTitle}>
                {f.title}
              </Heading>
              <p className={styles.focusBody}>{f.body}</p>
            </div>
          ))}
        </div>
        <div className={styles.stackRow}>
          <span className={styles.stackLabel}>
            <Translate id="homepage.stack.label">Günlük stack</Translate>
          </span>
          <div className={styles.stackList}>
            {dailyStack.map((s) => (
              <span key={s} className={styles.stackItem}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedCta() {
  const rssUrl = useBaseUrl('/blog/rss.xml');
  return (
    <section className={clsx(styles.section, styles.ctaSection)}>
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.ctaText}>
            <Heading as="h2" className={styles.ctaTitle}>
              <Translate id="homepage.cta.title">Yeni yazıları kaçırma.</Translate>
            </Heading>
            <p className={styles.ctaBody}>
              <Translate id="homepage.cta.body">
                RSS ile abone ol ya da backend mimarisi üzerine konuşmak için
                LinkedIn'de bağlantı kur.
              </Translate>
            </p>
          </div>
          <div className={styles.actions}>
            <a className="ak-btn ak-btn--light" href={rssUrl}>
              <Translate id="homepage.cta.rss">RSS ile abone ol</Translate>
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

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({id: 'homepage.meta.title', message: 'Ana Sayfa'})}
      description={translate({
        id: 'homepage.meta.description',
        message:
          'Backend mühendisliği, sistem tasarımı ve performans üzerine mühendislik blogu.',
      })}>
      <main>
        <Hero />
        <LatestPosts />
        <FocusAreas />
        <FeedCta />
      </main>
    </Layout>
  );
}
