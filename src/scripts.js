document.ready
$('.hamburger').on('click', function(e) {
    $('.page,.hamburger').toggleClass("show");  
    e.preventDefault();
  });