document.addEventListener('DOMContentLoaded', () => {
  // do your setup here

  let jQuery = require('jquery')
  global.jQuery = jQuery
  global.$ = jQuery
  let bootstrap = require('bootstrap-sass');
  console.log('Initialized app');
  
  if (window.location.pathname.match('resources')) {
    require('javascripts/resources');
  }
  
});
