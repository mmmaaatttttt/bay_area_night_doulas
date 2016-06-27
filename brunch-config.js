const doulas = require('./data/doulas')
const testimonials = require('./data/testimonials')

module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      },
      order: {
        before: /jquery/g
      }
    },
    stylesheets: {
      joinTo: {
        'vendor.css': /^node_modules/,
        'app.css': /^app/
      }
    },
  },

  plugins: {
    babel: {presets: ['es2015']},
    sass: {
      options: {
        includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
      }
    },
    jade: {
      locals: {
        testimonials
      }
    }
  }
};
