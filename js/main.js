 (function($) {
  "use strict"; // Start of use strict for strict mode
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/

// Preloader
$(window).on('load', function () {
   if ($('#preloader').length) {
     $('#preloader').delay(100).fadeOut('slow', function () {
       $(this).remove();
     });
   }
 });
 // Back to top button
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  return false;
});
})(jQuery); // End of use strict

