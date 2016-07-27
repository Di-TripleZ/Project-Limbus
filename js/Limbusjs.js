var thunderSound = new Audio('mp3/thunder.mp3');
var evilLaughSound = new Audio('mp3/evilLaugh.ogg');
var tocataStart = new Audio('mp3/tocata-start.wav');
var tocataLoop = new Audio('mp3/tocata-loop.wav');
var doorCreak = new Audio('mp3/door-creak.mp3');
var medBeep = new Audio('mp3/MedBeep.wav');
var medDeath = new Audio('mp3/MedDeath.wav')

var time, timeSpent;
var topWeb, leftWeb;
var badEndingTime = 120000
var badEnding = true;
var thunderedMainPage = false;
var thunderedEp1 = false;
var tocataplayed = false;
var lifeplayed = false;
var deathplayed = false;
var blackedOut = false;

$(document).ready(function() {
	$(".button-collapse").sideNav();
})

// /* Scroller Slower Handler */
// if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
// window.onmousewheel = document.onmousewheel = wheel;

// function wheel(event) {
// 	var delta = 0;
// 	if (event.wheelDelta) delta = event.wheelDelta / 60;
// 	else if (event.detail) delta = -event.detail / 3;

// 	handle(delta);
// 	if (event.preventDefault) event.preventDefault();
// 	event.returnValue = false;
// }

// function handle(delta) {
// 	var time = 1000;
// 	var distance = 150;

// 	$('html, body').stop().animate({
// 		scrollTop: $(window).scrollTop() - (distance * delta)
// 	}, time);
// }
// /* End of Scroller Slower Handler */




function thunderEffect() {
	if (thunderedEp1 === false) {
		soundThunder();
		imageThunder();
		console.log('KABUUUUM')
	}
}

function soundThunder() {
	thunderSound.play();
}

function imageThunder() {
	setTimeout(invertImage, 0);
	setTimeout(invertImage, 100);
	setTimeout(invertImage, 500);
	setTimeout(invertImage, 700);
}

function invertImage() {
	$(".ep1").not(".invertException").toggleClass('invert');
}

function showElement(position, selector, settimeout) {
	if (position <= topWeb) {
		setTimeout(function() {
			$(selector).removeClass('hid');
		}, settimeout);
		setTimeout(function() {
			$(selector).removeClass('visuallyhidden');
		}, settimeout + 20);
	}
}

function showTextEffect(position, selector, delay) {
	if (position <= topWeb) {
		showText(selector, delay);
	}
}

function showText(selector, delay) {
	$(selector).textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0, delayScale: delay } });
	changeCSS(selector, 'display', 'inline');
}

function changeCSS(selector, css, change) {
	$(selector).css(css, change)
}

function playTocata() {
	if (tocataplayed === false) {
		tocataPlayed = true;
		setTimeout(function() {
			tocataStart.play();
		}, 1);
		setTimeout(function() {
			tocataStart.pause()
		}, 13131);
	}
}

function stopScrollBar() {
	$('body').addClass('stop-scrolling')
}

function restartScrollBar() {
	$('body').removeClass('stop-scrolling')
}

function loopSound() {
	this.currentTime = 0;
	this.play();
}

$('.tlt').textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0 } });

function updateTimeSpent() {
	var end = new Date;
	timeSpent = end - time;
	console.log(timeSpent)
}
