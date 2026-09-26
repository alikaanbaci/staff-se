import {useEffect, useMemo, useRef, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, {translate} from '@docusaurus/Translate';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import type {Props} from '@theme/BlogListPage';

import {
  readingTimeLabel,
  useBlogPosts,
  useFormatDate,
  type BlogPostSummary,
} from '@site/src/data/blog';
import styles from './styles.module.css';

// postsPerPage: 'ALL' olduğundan tek bir liste sayfası var; etiket filtresi
// ve arama tüm yazılar üzerinde istemci tarafında çalışıyor.

const ALL = '__all__';

type TagOption = {key: string; label: ReactNode; count: number};

function useTagOptions(posts: BlogPostSummary[]): TagOption[] {
  return useMemo(() => {
    const counts = new Map<string, {label: string; count: number}>();
    for (const post of posts) {
      for (const tag of post.tags) {
        const entry = counts.get(tag.permalink) ?? {label: tag.label, count: 0};
        entry.count += 1;
        counts.set(tag.permalink, entry);
      }
    }
    const tags = [...counts.entries()]
      .sort((a, b) => b[1].count - a[1].count || a[1].label.localeCompare(b[1].label))
      .map(([key, {label, count}]) => ({key, label, count}));
    return [
      {
        key: ALL,
        label: <Translate id="blog.filter.all">Tümü</Translate>,
        count: posts.length,
      },
      ...tags,
    ];
  }, [posts]);
}

function BlogList() {
  const posts = useBlogPosts();
  const formatDate = useFormatDate();
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const tagOptions = useTagOptions(posts);
  const [activeTag, setActiveTag] = useState(ALL);
  const [query, setQuery] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  // ⌘K / Ctrl+K arama kutusuna odaklanır
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const shown = useMemo(() => {
    const q = query.trim().toLocaleLowerCase(currentLocale);
    return posts.filter(
      (p) =>
        (activeTag === ALL || p.tags.some((t) => t.permalink === activeTag)) &&
        (!q ||
          `${p.title} ${p.description}`.toLocaleLowerCase(currentLocale).includes(q)),
    );
  }, [posts, activeTag, query, currentLocale]);

  return (
    <main className="container">
      <header className={styles.header}>
        <div className="ak-eyebrow">Blog</div>
        <Heading as="h1" className={styles.title}>
          <Translate id="blog.list.title">Mühendislik notları</Translate>
        </Heading>
        <p className={styles.lead}>
          <Translate id="blog.list.lead">
            Backend mimarisi, performans ve production sistemlerinin ardındaki
            trade-off'lar üzerine derinlemesine yazılar.
          </Translate>
        </p>
      </header>

      <div className={styles.toolbar}>
        <div
          role="group"
          aria-label={translate({
            id: 'blog.filter.ariaLabel',
            message: 'Etikete göre filtrele',
          })}
          className={styles.filter}>
          {tagOptions.map((tag) => {
            const on = tag.key === activeTag;
            return (
              <button
                key={tag.key}
                type="button"
                aria-pressed={on}
                onClick={() => setActiveTag(tag.key)}
                className={clsx(styles.filterButton, on && styles.filterButtonOn)}>
                {tag.label}
                <span className={styles.filterCount}>{tag.count}</span>
              </button>
            );
          })}
        </div>
        <label className={styles.search}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <span className="sr-only">
            <Translate id="blog.search.label">Yazılarda ara</Translate>
          </span>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={translate({
              id: 'blog.search.placeholder',
              message: 'Yazılarda ara…',
            })}
          />
          <kbd className={styles.kbd}>⌘K</kbd>
        </label>
      </div>

      <section className={styles.list}>
        {shown.map((post) => (
          <Link
            key={post.permalink}
            to={post.permalink}
            className={clsx('ak-card-link', 'ak-grid', styles.card)}>
            <div className={styles.cardMain}>
              <div className={styles.tags}>
                {post.tags.map((tag) => (
                  <span key={tag.permalink} className="ak-tag">
                    {tag.label}
                  </span>
                ))}
              </div>
              <Heading as="h2" className={styles.cardTitle}>
                {post.title}
              </Heading>
              <p className={styles.cardSummary}>{post.description}</p>
            </div>
            <div className={styles.cardSide}>
              <div className={styles.meta}>
                <span>{formatDate(post.date)}</span>
                <span>{readingTimeLabel(post.readingTime)}</span>
              </div>
              <span className={styles.readMore}>
                <Translate id="blog.list.readPost">Yazıyı oku →</Translate>
              </span>
            </div>
          </Link>
        ))}
        {shown.length === 0 && (
          <p className={styles.empty}>
            <Translate id="blog.list.empty">Eşleşen yazı bulunamadı.</Translate>
          </p>
        )}
      </section>
    </main>
  );
}

function BlogListPageMetadata({metadata}: Props) {
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const title = permalink === '/' ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <Layout>
        <BlogList />
      </Layout>
    </HtmlClassNameProvider>
  );
}
