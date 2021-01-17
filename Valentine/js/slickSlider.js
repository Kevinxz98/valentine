
   $(document).on('ready', function() {

	$('.slickSlider').slick({
	  infinite: true,
	  speed: 1300,
	  autoplay: true,
	  slidesToShow: 5 ,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1
      }
    }
  ]
});     
      $(".lazy").slick({
        lazyLoad: 'ondemand', 
        infinite: true
      });
    });



$(window).load(function() {
    	$('.flexslider').flexslider({
    	touch: true,
    		});
  		});



var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    } 
    