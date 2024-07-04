// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "@nuxt/icon"],
  googleFonts: {
    families: {
      Inter: [400, 700]
    },
    display: 'swap'
  }
})