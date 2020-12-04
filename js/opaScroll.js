//set time to wait after scroll
var time = 250

//set the height to scroll
var height = window.innerHeight

var finish_up = false;
var finish_down = false;
var timer;

document.addEventListener('scroll', function(e) {
	if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
		 finish_up = false
		 finish_down = false
    }, time);
});

document.addEventListener("wheel", function(e){
	e.preventDefault();
	if (e.deltaY < 0)
	{
		if(finish_down == false){
			finish_down = true;
			scrollup()
		}
	}
	else if (e.deltaY > 0){
		if(finish_up == false){
			finish_up = true;
			scrolldown();
		}
	}
}, {passive: false} );
	
function scrolldown(){
	window.scrollBy({
	top: height,
	left: 0,
	behavior: 'smooth'
	});
}

function scrollup(){
	window.scrollBy({
	top: -height,
	left: 0,
	behavior: 'smooth'
	});
}