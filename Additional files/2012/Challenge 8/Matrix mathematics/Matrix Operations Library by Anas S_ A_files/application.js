var Site = {
  Common: {
    hoverClass: function(e) {
      // add a "hover" class while hovered. Used for dropdowns
      $(e).hover(function() {
        $(this).addClass('hover');
      },
      function() {
        $(this).removeClass('hover');
      });
    },
    init: function(e) {
      $('body').removeClass('nojs').addClass('js');
      
      /* enabling IE6 to detect :first-child */
      $('.category-navigation ul ul li:first-child, .content ul.tutorials li:first-child, .secondary-navigation ul li:first-child, .content ul.announcements li:first-childw').addClass('first-child');
      
    },    
    AccessibleInputValues: function(e) {
      $(e).each(function(){
       var val = $(this).prev().html();
       if(this.value == '') this.value = val;
       $(this)
        .focus(function(){
         if(this.value == val) this.value = '';
        }).blur(function(){
         if(this.value == '') this.value = val;
       })
      });
    }
  }
};

$(document).ready(function() {
  
  Site.Common.init();
  
  /* Navigation Dropdown */
  Site.Common.hoverClass($('.category-navigation > ul > li'));
  
  /* Accessible input values ---------------- */
  $('.sidebar .box-search form input.text').addClass('triggered');
  Site.Common.AccessibleInputValues($('.sidebar .box-search form input.text'));
  
  /* News Ticker */

  if (typeof $.fn.marquee != 'undefined') {

    $('.marquee-postings marquee').marquee('pointer').mouseover(function () {
    $(this).trigger('stop');
    }).mouseout(function () {
      $(this).trigger('start');
    }).mousemove(function (event) {
      if ($(this).data('drag') == true) {
        this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
      }
    }).mousedown(function (event) {
      $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
    }).mouseup(function () {
      $(this).data('drag', false);
    });
  };
  
  /* IE6 PNG support enabler */
  if(typeof DD_belatedPNG != 'undefined') {
        DD_belatedPNG.fix(
            '.footer,' +
            '.footer-in,'
        );
    };
  
});