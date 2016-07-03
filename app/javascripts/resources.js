$(function() {

  var $resourcelist = $("#resource-details ul");
  var $resourcecategories = $("#resource-categories ul li");

  $resourcecategories.click(function() {
    var $el = $(this);
    var index = $el.index();
    $resourcecategories.removeClass('active-category');
    $el.addClass('active-category');
    $resourcelist.hide().eq(index).slideToggle({duration: 500});
  });

  $resourcecategories.eq(0).trigger('click');
});