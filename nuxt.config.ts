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

  
  modules: ['@nuxtjs/supabase', '@nuxt/image', 'nuxt-mail'],

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

  mail: {
    message: {
    to: 'info@ashikahmed.net',
  },
    smtp: {
      host: 'smtp.gmail.com', 
      port: 465,
      auth: {
        user: 'ashik9121295621@gmail.com',
        pass: "ppdkoszmoafngcgm"

      }
    }
  },

  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      bodyAttrs: {
        class: 'antialiased text-base font-body text-dark overflow-x-hidden',
      },
      
    },
  },
})