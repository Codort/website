// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image', '@nuxtjs/google-fonts', '@nuxt/ui', '@nuxt/content'],

  colorMode: {
    preference: 'system',
    fallback: 'light',
    storageKey: 'nuxt-color-mode',
    classSuffix: '',
  },

  googleFonts: {
    families: {
      'IBM Plex Sans': [400, 500, 600],
    },
    display: 'swap',
  },

  image: {
    format: ['webp'],
  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },

  content: {
    markdown: {
      remarkPlugins: ['remark-reading-time'],
    },
  },

  compatibilityDate: '2024-10-18',
});
