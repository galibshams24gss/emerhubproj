/*const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './src/**///*.html',
    //  './src/**/*.vue'
  //],
  
    /*defaultExtractor: content => {
      const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
      const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
      return broadMatches.concat(innerMatches)
    }
  })*/
  const autoprefixer = require('autoprefixer');
  const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [ 
      require('tailwindcss'), 
      require('autoprefixer')
      //...process.env.NODE_ENV === 'production' ? [purgecss] : []
    ]
  }

  /*const tailwindcss = require('tailwindcss');

  module.exports = {
    plugins: [
      tailwindcss,
    ],
  };*/