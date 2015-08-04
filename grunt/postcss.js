module.exports = {
  postcss: {
    options: {
      map: true,
      processors: [
        require('autoprefixer-core')({browsers: ['last 5 version']})
      ]
    },
    dist: {
      src: 'css/main.css'
    }
  }
}