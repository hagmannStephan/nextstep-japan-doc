import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NextStep Japan Doc",
  description: "A help resource for NextStep members staying in Japan",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/doc/overview' }
    ],

    sidebar: [
      { text: 'Overview', link: '/doc/overview' },
      {
        text: 'Before Your Arrival',
        collapsed: true,
        items: [
          { text: 'General Information', link: '/doc/before/general-info' },
          { text: 'Housing', link: '/doc/before/housing' },
          { text: 'Learning the Language', link: '/doc/before/learn-language' },
          { text: 'Tourist Visa', link: '/doc/before/tourist-visa' }
        ]
      },
      {
        text: 'During Your Stay',
        collapsed: true,
        items: [
          { text: 'Visa Extension', link: '/doc/during/extend-visa'},
          { text: 'Postal Service', link: '/doc/during/postal-service'},
          { text: 'Shinkansen', link: '/doc/during/shinkansen'},
          { text: 'Public Transport', link: '/doc/during/public-transport' },
          { text: 'Live as a Vegetarian', link: "/doc/during/veggi"}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hagmannStephan/nextstep-japan-doc' }
    ],

    search: {
      provider: 'local'
    }
  }
})
