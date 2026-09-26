import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type {Options as BlogPluginOptions} from '@docusaurus/plugin-content-blog';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ali Kaan Bacı',
  tagline: 'Software Engineer — backend, full-stack ve sistem tasarımı üzerine mühendislik notları',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // GitHub Pages üretim adresi. Kullanıcı adınızı/repo adınızı değiştirdiyseniz
  // aşağıdaki url / baseUrl / organizationName / projectName alanlarını güncelleyin.
  url: 'https://alikaanbaci.github.io',
  baseUrl: '/staff-se/',

  // GitHub pages deployment config.
  organizationName: 'alikaanbaci', // GitHub kullanıcı adı.
  projectName: 'staff-se', // GitHub repo adı.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],

  // i18n: Türkçe varsayılan, İngilizce ikinci dil.
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    localeConfigs: {
      tr: {
        label: 'Türkçe',
        htmlLang: 'tr-TR',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        // Blog, yazı özetlerini global data olarak da yayınlayan sarmalayıcı
        // plugin üzerinden yükleniyor (aşağıdaki plugins).
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      './plugins/blog-plugin.ts',
      {
        path: 'blog',
        routeBasePath: 'blog',
        blogTitle: 'Mühendislik Blogu',
        blogDescription:
          'Yazılım mühendisliği, sistem tasarımı ve öğrenilen dersler üzerine notlar.',
        // Blog listesi tek sayfa: filtre ve arama istemci tarafında tüm
        // yazılar üzerinde çalışıyor (src/theme/BlogListPage).
        postsPerPage: 'ALL',
        blogSidebarTitle: 'Son Yazılar',
        blogSidebarCount: 10,
        showReadingTime: true,
        feedOptions: {
          type: ['rss', 'atom'],
          xslt: true,
        },
        editUrl: 'https://github.com/alikaanbaci/staff-se/tree/main/',
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      } satisfies BlogPluginOptions,
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap',
    },
  ],
  headTags: [
    {tagName: 'link', attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'}},
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ali Kaan Bacı',
      items: [
        {to: '/blog', label: 'Blog', position: 'right'},
        {to: '/about', label: 'Hakkımda', position: 'right'},
        {
          href: 'https://github.com/alikaanbaci',
          label: 'GitHub',
          position: 'right',
        },
        // TR/EN segment toggle — src/theme/NavbarItem/ComponentTypes.tsx
        {type: 'custom-localeToggle', position: 'right'},
      ],
    },
    // Footer tamamen src/theme/Footer altında özel bileşen.
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'go', 'python', 'java'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
