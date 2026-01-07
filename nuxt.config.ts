// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    '@pinia/colada-nuxt',
    'shadcn-nuxt',
  ],

  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],

  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2025-07-15',

  vite: { plugins: [tailwindcss()] },


  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      },
    ],
  },

  shadcn: {
    prefix: '',
    componentDir: '@/components',
  },

})
