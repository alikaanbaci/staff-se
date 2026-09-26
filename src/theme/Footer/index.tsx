import {memo, type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate, {translate} from '@docusaurus/Translate';

import styles from './styles.module.css';

// Tek satırlık footer: monogram + copyright solda, linkler sağda.
function Footer(): ReactNode {
  const rssUrl = useBaseUrl('/blog/rss.xml');
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className="ak-mark" aria-hidden="true">
            AK
          </span>
          <span>© {new Date().getFullYear()} Ali Kaan Bacı</span>
        </div>
        <nav
          aria-label={translate({id: 'footer.navAriaLabel', message: 'Alt menü'})}
          className={styles.links}>
          <Link to="/blog">Blog</Link>
          <Link to="/about">
            <Translate id="footer.about">Hakkımda</Translate>
          </Link>
          <a href="https://github.com/alikaanbaci">GitHub</a>
          <a href="https://www.linkedin.com/in/alikaanbaci">LinkedIn</a>
          <a href="mailto:alikaanbaci@gmail.com">
            <Translate id="footer.email">E-posta</Translate>
          </a>
          <a href={rssUrl}>RSS</a>
        </nav>
      </div>
    </footer>
  );
}

export default memo(Footer);
