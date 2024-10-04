// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@bloggrify/core'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],
  googleFonts: {
    families: {
      'IBM Plex Sans': [400, 700],
    },
    display: 'swap',
  },
  image: {
    format: ['webp'],
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
});
