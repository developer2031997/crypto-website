// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'swiper/css',
    'swiper/css/pagination',
    // '~~/layout/main.css',
  ],
  modules: [
    '@nuxt/image',
    'nuxt-icon'
  ],
  build: {
    transpile: ['swiper/vue'],
  },
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' },
  ],
})
