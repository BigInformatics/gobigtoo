import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'GoBig',
  tagline: 'Foundational framework for building apps',
  favicon: 'img/logo.svg',
  url: 'https://biginformatics.github.io',
  baseUrl: '/gobig/',
  organizationName: 'BigInformatics',
  projectName: 'gobig',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'content',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/BigInformatics/gobig/edit/main/docs/content/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {customCss: require.resolve('./src/css/custom.css')},
      },
    ],
  ],
  plugins: [require.resolve('@easyops-cn/docusaurus-search-local')],
  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'GoBig',
      logo: {alt: 'GoBig', src: 'img/logo.svg'},
      items: [
        {to: '/', label: 'Intro', position: 'left'},
        {to: '/architecture', label: 'Architecture', position: 'left'},
        {to: '/testing', label: 'Testing', position: 'left'},
        {to: '/security', label: 'Security', position: 'left'},
        {href: 'https://github.com/BigInformatics/gobig/blob/main/CONTRIBUTING.md', label: 'Contributing', position: 'left'},
        {href: 'https://github.com/BigInformatics/gobig/blob/main/CODE_OF_CONDUCT.md', label: 'Code of Conduct', position: 'left'},
        {href: 'https://github.com/BigInformatics/gobig', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} BigInformatics. MIT License.`,
      links: [
        {
          title: 'Project',
          items: [
            {label: 'GitHub', href: 'https://github.com/BigInformatics/gobig'},
            {label: 'Contributing', href: 'https://github.com/BigInformatics/gobig/blob/main/CONTRIBUTING.md'},
            {label: 'Code of Conduct', href: 'https://github.com/BigInformatics/gobig/blob/main/CODE_OF_CONDUCT.md'},
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
