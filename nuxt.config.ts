export default defineNuxtConfig({
  compatibilityDate: '2026-08-04',
  // Defaults to `/` for local previews and custom domains. GitHub Pages sets
  // NUXT_APP_BASE_URL to the repository path during its build.
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
  },
  css: ['~/assets/main.css'],
  devtools: { enabled: false },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
})
