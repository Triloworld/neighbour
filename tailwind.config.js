/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'store/**/*.vue',
      'plugins/**/*.vue',
      'plugins/**/*.js',
      'static/**/*.js',
      'nuxt.config.js'
    ],
  },
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
  },
  plugins: [  

  ]
}