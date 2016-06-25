module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },

  plugins: {
    babel: {presets: ['es2015']},
    sass: {
      options: {
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
      }
    }
  }
};
