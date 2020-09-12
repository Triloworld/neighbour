require('dotenv').config();

export default {
  components: true,
  head: {
    title: "Neighbours Chat",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      { name: "robots", content: "INDEX,FOLLOW" },
    ],
    script: [
      // { src: `https://polyfill.io/v3/polyfill.min.js?features=${features}&flags=gated`, body: true, async: true, defer: true  },
    ],
    link: [
      { 
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },
  modules: [
    ['nuxt-leaflet', { 
      /* module options */ 
    }],
    ['@nuxtjs/tailwindcss', { 
      /* module options */ 
    }],
 ],
 css: [
  'leaflet.locatecontrol/dist/L.Control.Locate.css',
  '~/assets/css/styles.css'
 ],
 plugins: [
  { src: "~/plugins/vue2-leaflet-locatecontrol.js", mode: 'client' },
 ]
}