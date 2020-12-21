# opaScroll
OnePAgeScroll

A Simple Boilerplate for beautiful One Page Scrolling 

## Requirements
```
JQuery: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
## Parameter
```javascript
//set time to wait after scroll
var time = 200;

//set the height to scroll
var height = 0;

//ids to jump to
var ids = [];

//set animation duration
animationTime = 600;

//sroll to top at load
scrollToTop = false;
```

## Example
```html
<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="js/opaScroll.js"></script>
	<link rel="stylesheet" href="css/stylesheet.css">
	<title>Boilerplate </title>
</head>
<body>
	<section>
		<div id="first">
			first
		</div>

		<div id="second">
			second
		</div>

		<div id="last">
			last :) 
		</div>
	</section>
</body>
<script>
	ids = ['#first','#second','#last'];
	scrollToTop = true;
</script>
</html>
```
