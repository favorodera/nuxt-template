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
    'notform-nuxt',
    '@pinia/colada-nuxt',
    'shadcn-nuxt',
  ],

  components: [
    '~/components',
  ],
  
  imports: {
    presets: [
      // {
      //   from: 'vue-sonner',
      //   imports: ['toast'],
      // },
    ],
  },

  devtools: { enabled: true },

  css: [
    './app/assets/css/tailwind.css',
    './app/assets/css/app.css',
    // 'vue-sonner/style.css',
  ],

  colorMode: {
    classSuffix: '',
  },

  experimental: {
    typedPages: true,
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
    componentDir: '@/components/shadcn',
  },

})
