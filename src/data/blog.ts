import {usePluginData} from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {translate} from '@docusaurus/Translate';

export type BlogPostSummary = {
  title: string;
  description: string;
  permalink: string;
  /** ISO 8601 */
  date: string;
  /** Dakika cinsinden */
  readingTime?: number;
  tags: {label: string; permalink: string}[];
};

/** plugins/blog-plugin.ts tarafından yayınlanan yazılar (yeniden eskiye). */
export function useBlogPosts(): BlogPostSummary[] {
  const data = usePluginData('docusaurus-plugin-content-blog') as
    | {posts: BlogPostSummary[]}
    | undefined;
  return data?.posts ?? [];
}

/** Aktif locale'e göre kısa tarih: "31 Ağu 2026" / "Aug 31, 2026". */
export function useFormatDate(): (iso: string) => string {
  const {
    i18n: {currentLocale, localeConfigs},
  } = useDocusaurusContext();
  const lang = localeConfigs[currentLocale]?.htmlLang ?? currentLocale;
  const fmt = new Intl.DateTimeFormat(lang, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
  return (iso) => fmt.format(new Date(iso));
}

/** "7 dk okuma" / "7 min read" */
export function readingTimeLabel(minutes?: number): string {
  return translate(
    {id: 'blog.readingTime', message: '{minutes} dk okuma'},
    {minutes: Math.max(1, Math.ceil(minutes ?? 1))},
  );
}
