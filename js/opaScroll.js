//set time to wait after scroll
var time = 500

//set the height to scroll
var height = window.innerHeight

var finish_up = false;
var finish_down = false;
var timer;

var actualState = 0;

var ids = [];

document.addEventListener('scroll', function(e) {
	if(timer !== null) {
        clearTimeout(timer);        
    }
    timer = setTimeout(function() {
		console.log("beendet");
		 finish_up = false
		 finish_down = false
    }, time);
});

document.addEventListener("wheel", function(e){
	console.log(actualState);
	e.preventDefault();
	if (actualState == ids.length-1) {
		console.log("am ende");
		finish_up = false
		finish_down = false
	}
	if (e.deltaY < 0)
	{
		if(finish_down == false){
			finish_down = true;
			if(actualState != 0){
				actualState -=1;
				scrolldown(ids[actualState]);
			}
		}
	}
	else if (e.deltaY > 0){
		if(finish_up == false){
			finish_up = true;
			if(actualState < ids.length){
			actualState +=1;
			scrolldown(ids[actualState]);
			}
		}
	}
}, {passive: false} );
	
function scrolldown(toid){
	if(actualState >= ids.length){
		return
	}else{
		$([document.documentElement, document.body]).animate({
			scrollTop: $(toid).offset().top
		}, 300);
	}
}