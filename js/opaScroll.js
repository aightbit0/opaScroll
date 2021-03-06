//set time to wait after scroll
var time = 400;

//set the height to scroll
var height = 0;

//ids to jump to
var ids = [];

//set animation duration
animationTime = 600;

//sroll to top at load
scrollToTop = false;

var finish_up = false;
var finish_down = false;
var timer;

var actualState = 0;
var endpage = false;

var load = true;
var ts;
// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

if(isIE || isSafari){
	load = false;
}

window.addEventListener('load', (event) => {
	if(scrollToTop == true){
		$([document.documentElement, document.body]).animate({
			scrollTop: 0
		}, animationTime);
	}
  });

if(load){
	$(document).bind('touchstart', function (e){
		ts = e.originalEvent.touches[0].clientY;
	 });
	 
	 $(document).bind('touchend', function (e){
		var te = e.originalEvent.changedTouches[0].clientY;
		if(ts > te+5){
		   endpage = false;
		   if(finish_up == false){
			 finish_up = true;
			 scrolldown("down");
		 }	
		}else if(ts < te-5){
		 if(finish_down == false){
			 finish_down = true;
			 scrolldown("up");
		 }
		}
	 });
	 $(window).scroll(function() {
		if(timer !== null) {
			clearTimeout(timer);        
		}
		timer = setTimeout(function() {
			 finish_up = false
			 finish_down = false
		}, time);
		if($(window).scrollTop() + $(window).height() >= $(document).height()-30) {
			endpage = true;
		}
	 });
	
	document.addEventListener("wheel", function(e){
		e.preventDefault();
		if (e.deltaY < 0)
		{
			endpage = false;
			if(finish_down == false){
				finish_down = true;
				scrolldown("up");
			}
		}
		else if (e.deltaY > 0){
			if(finish_up == false){
				finish_up = true;
				scrolldown("down");
			}
		}
	}, {passive: false} );
		
}

function scrolldown(direction){
	if(ids.length != 0){
		if(actualState >= ids.length){
			return
		}
	}
	if(ids.length >0 && height==0){
		if(direction == "up"){
			if(actualState != 0){
				actualState -=1;
			}
		}else{
			if(actualState+1 < ids.length){
				actualState +=1;
			}
		}
		$([document.documentElement, document.body]).animate({
			scrollTop: $(ids[actualState]).offset().top
		}, animationTime);
	}else if(ids.length == 0 && height > 0){
		if(direction == "up"){
			if(actualState != 0){
				actualState -=1;
			}
		}else{
			if(endpage == false){
				actualState +=1;
			}
		}
		$([document.documentElement, document.body]).animate({
			scrollTop: height*actualState
		}, animationTime);
	}else{
		console.error("invalid configuration opaScroll.js");
	}
}