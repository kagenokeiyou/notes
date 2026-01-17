import { defineConfig } from 'vitepress'

const base = '/notes/'

export default defineConfig({
  title: 'Notes',
  description: 'Some notes written by Keiyou',
  lang: 'zh-CN',
  base: base,
  head: [['link', { rel: 'icon', href: base + 'avatar.png' }]],
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/avatar.png',
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kagenokeiyou/notes' }],
    outline: {
      level: 'deep',
    },
    footer: {
      message:
        'Released under the <a href="https://github.com/kagenokeiyou/notes/blob/main/LICENSE">MIT License</a>',
      copyright: 'Copyright © 2026-present <a href="https://github.com/kagenokeiyou">Keiyou</a>',
    },
    nav: [{ text: 'Contents', link: '/contents.md' }],

    sidebar: {},
  },
})
