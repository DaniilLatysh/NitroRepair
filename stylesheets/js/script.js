$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
    });
    return false;
});

$('elements').onScreen({
   container: window,
   direction: 'vertical',
   doIn: function() {
     // Do something to the matched elements as they come in
   },
   doOut: function() {
     // Do something to the matched elements as they get off scren
   },
   tolerance: 0,
   throttle: 50,
   toggleClass: 'onScreen',
   lazyAttr: null,
   lazyPlaceholder: 'someImage.jpg',
   debug: false
});

/*https://github.com/silvestreh/onScreen/tree/master/demo*/