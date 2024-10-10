// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@bloggrify/core'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
    '@nuxt/ui',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
    classSuffix: '',
  },
  googleFonts: {
    families: {
      'IBM Plex Sans': [400, 700],
    },
    display: 'swap',
  },
  image: {
    format: ['webp'],
  },
  fontawesome: {
    icons: {
      solid: ['arrow-right'],
    },
    component: 'fa',
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
