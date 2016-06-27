document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log(global)
  let jQuery = require('jquery')
  global.jQuery = jQuery
  // let global.jQuery = require('jquery');
  console.log('jQuery', jQuery);
  // let $ = jQuery
  // console.log("jquery", $)
  let bootstrap = require('bootstrap-sass');
  // console.log("bootstrap", bootstrap)  
  console.log('Initialized app');
});
