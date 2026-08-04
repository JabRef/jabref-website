export default defineNuxtConfig({
  compatibilityDate: '2026-08-04',
  css: ['~/assets/main.css'],
  devtools: { enabled: false },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
})
