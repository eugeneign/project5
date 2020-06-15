$( document ).ready(function() {
  $('.hamburger,.close').on('click', function(e) {
      $('.page,.hamburger,.side-menu').toggleClass("show");  
      e.preventDefault();
  });
});