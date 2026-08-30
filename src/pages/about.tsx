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
                <Translate id="about.exp1.period">Nisan 2024 — Günümüz</Translate>
              </div>
              <Heading as="h3" style={{marginBottom: '0.15rem'}}>
                <Translate id="about.exp1.role">Senior Software Engineer</Translate>
                {' · '}
                <Translate id="about.exp1.company">OBSS</Translate>
              </Heading>
              <p>
                <Translate id="about.exp1.description">
                  Turkish Airlines'ın dijital ödeme ekosistemi altında, üye
                  işyerlerinin ödeme kabul edip yönetmesini sağlayan bir
                  payment facilitator (PayFac) platformu olan TKpay üzerinde
                  çalışıyorum. Kritik tasarım hatalarını giderip verimsiz
                  bileşenleri yeniden yazarak mutabakat (reconciliation) ve
                  settlement akışlarını stabilize ettim; günde ~50 bin işlem
                  için işlem süresini saatlerden dakikalara indirdim. İş
                  açısından kritik finansal akışlarda refactoring
                  inisiyatifleri yürüttüm, fiyatlandırma/vade farkı
                  hesaplamaları ve otomatik iptal (auto-cancellation) gibi
                  özellikleri hayata geçirdim, kök neden analiziyle karmaşık
                  sistem tutarsızlıklarını çözdüm. Tech stack: Java, Spring
                  Boot, PostgreSQL, Kafka, Kubernetes.
                </Translate>
              </p>
              <p>
                <Translate id="about.exp1.description2">
                  Aynı dönemde Garanti Teknoloji için çalışan yönetimi ve
                  ücretlendirme çözümünde, legacy .NET servislerinin Java /
                  Spring Boot tabanlı bir mikroservis mimarisine taşınmasına
                  katkı sağladım; maaş artışı ve çalışan yönetimi
                  modüllerini karmaşık domain kurallarıyla birlikte
                  geliştirdim, iş analistleriyle yakın çalışarak bu
                  gereksinimleri sağlam teknik çözümlere dönüştürdüm. Tech
                  stack: Java, Spring Boot, MSSQL.
                </Translate>
              </p>
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
              <p>
                <Translate id="about.exp2.description">
                  Dow Chemicals için endüstriyel IoT ve mobil uygulamaları
                  destekleyen dağıtık backend servisleri ve veri entegrasyonu
                  çözümleri geliştirdim; Azure ve Kubernetes üzerinde
                  cloud-native veri alım (ingestion), senkronizasyon ve
                  backend servislerinin stabilizasyonuna odaklandım. SAP
                  sistemleriyle entegre veri alım akışlarını yeniden
                  yapılandırarak Couchbase ve mobil istemcilere giden
                  pipeline'ların güvenilirliğini artırdım; Couchbase Sync
                  Gateway ile offline-first mimariyi destekleyen dağıtık
                  backend servisleri tasarladım. Kararsız batch job'ları ve
                  veri pipeline'larını refactor ederek operasyonel yükü
                  azalttım; ARM template'leriyle infrastructure-as-code
                  tabanlı izleme ve alarm mekanizmaları kurarak alarm
                  gürültüsünü azalttım. Parametrik uygulama örnekleri
                  üzerinden rol bazlı servis çalıştırma yapısı tasarladım,
                  kritik geliştirmeler için teknik tasarım dokümanları
                  hazırlayıp uluslararası ekiplere sundum. Tech stack: Java,
                  Spring Boot, Azure, Kubernetes, Couchbase.
                </Translate>
              </p>
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
              <p>
                <Translate id="about.exp3.description">
                  OBSS'in dahili bir ürününde, mevcut mobil ve web
                  uygulamasının ölçeklenebilir, ürün odaklı bir platforma
                  dönüştürülmesine katkı sağladım; backend mimarisi, yeniden
                  kullanılabilir bileşenler, gözlemlenebilirlik ve
                  geliştirme altyapısı üzerine odaklandım. Yeniden
                  kullanılabilir backend mimarisi ve temel bileşenler
                  tasarlayarak geliştirme verimliliğini artırdım, Spring
                  Data Specifications ile dinamik sorgu mekanizmaları
                  implemente ettim. Tech stack: Java, Spring Boot, MongoDB,
                  React.js, Kibana.
                </Translate>
              </p>
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
              <p>
                <Translate id="about.exp4.description">
                  Türk Telekom için geliştirilen müşteri şikayeti ve servis
                  yönetimi projesinde, gelen müşteri taleplerini,
                  şikayetlerini ve arıza kayıtlarını yöneten çok kiracılı
                  (multi-tenant) bir platforma katkı sağladım; sistem
                  tasarımı, teknik analiz ve çözüm tartışmalarına katıldım.
                  Tech stack: Java, Spring Boot, Oracle, Spring Data JPA,
                  Angular.
                </Translate>
              </p>
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
