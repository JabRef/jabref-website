const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2026-08-04',
  // Defaults to `/` for local previews and custom domains. GitHub Pages sets
  // NUXT_APP_BASE_URL to the repository path during its build.
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'JabRef — Reference manager',
      meta: [
        {
          name: 'description',
          content: 'JabRef is a free, open-source reference manager for collecting, organizing, and citing research.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${baseURL}favicon.ico`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${baseURL}img/favicons/favicon-32x32.png`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${baseURL}img/favicons/favicon-16x16.png`,
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: `${baseURL}img/favicons/apple-touch-icon.png`,
        },
        {
          rel: 'mask-icon',
          href: `${baseURL}img/favicons/safari-pinned-tab.svg`,
          color: '#4f5f8f',
        },
      ],
    },
  },
  css: ['~/assets/main.css'],
  devtools: { enabled: false },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
})
