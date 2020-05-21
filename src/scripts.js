document.ready
$('.hamburger').on('click', function(e) {
    $('.header, .hamburger-toggler').toggleClass("show");  
    e.preventDefault();
  });