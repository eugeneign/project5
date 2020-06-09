document.ready
$('.hamburger,.close').on('click', function(e) {
    $('.page,.hamburger').toggleClass("show");  
    e.preventDefault();
  });