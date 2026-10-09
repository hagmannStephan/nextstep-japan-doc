import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NextStep Japan Doc",
  description: "A help resource for NextStep members staying in Japan",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'During Your Stay',
        items: [
          { text: 'Extend Visa', link: 'doc/during/extend-visa'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hagmannStephan/nextstep-japan-doc' }
    ]
  }
})
