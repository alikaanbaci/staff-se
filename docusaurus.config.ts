import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Adınız Soyadınız',
  tagline: 'Software Engineer — dağıtık sistemler, backend ve mühendislik notları',
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
        docs: {
          id: 'default',
          path: 'projects',
          routeBasePath: 'projects',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/alikaanbaci/staff-se/tree/main/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          blogTitle: 'Mühendislik Blogu',
          blogDescription:
            'Yazılım mühendisliği, sistem tasarımı ve öğrenilen dersler üzerine notlar.',
          postsPerPage: 8,
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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Adınız Soyadınız',
      logo: {
        alt: 'Site Logosu',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'Ana Sayfa',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projeler',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {to: '/about', label: 'Hakkımda', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/alikaanbaci',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            {label: 'Ana Sayfa', to: '/'},
            {label: 'Projeler', to: '/projects'},
            {label: 'Blog', to: '/blog'},
            {label: 'Hakkımda', to: '/about'},
          ],
        },
        {
          title: 'Bağlantılar',
          items: [
            {label: 'GitHub', href: 'https://github.com/alikaanbaci'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/TODO'},
            {label: 'E-posta', href: 'mailto:TODO@example.com'},
          ],
        },
        {
          title: 'Diğer',
          items: [
            {label: 'RSS', href: 'pathname:///blog/rss.xml'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Adınız Soyadınız. Docusaurus ile inşa edildi.`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'diff', 'json', 'go', 'python', 'java'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
