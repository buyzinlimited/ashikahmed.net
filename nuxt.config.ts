import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true,

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  
  modules: ['@nuxtjs/supabase', '@nuxt/image'],

  supabase: {
    // Options
    redirect: false
  },

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    }
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      bodyAttrs: {
        class: 'antialiased text-base font-body text-dark overflow-x-hidden',
      },
    },
  },
})