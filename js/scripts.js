$(function() {

  $(document).on('click', '.menu a.scroll-to', function(event){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
  });

  $('.read-more').on('click', function() {
    $('.text-collapsed').addClass('active');
    return false;
  });

});




