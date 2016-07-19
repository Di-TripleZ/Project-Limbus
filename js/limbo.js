var app = angular.module('nightMaria', ['ngRoute']); //en el array inyectamos dependencias

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "views/home.html",
			controller: "HomeViewController"
		})
		.when("/warning", {
			templateUrl: "views/warning.html",
			controller: "WarningController"
		})
		.when("/Darkest-Nightmares", {
			templateUrl: "views/Ep1View1.html",
			controller: "Ep1View1Controller"
		})
		.otherwise({
			redirectTo: "/",
		});

}]);

app.controller("HomeViewController", ['$scope', function($scope) {

	window.addEventListener("scroll", updatePosition, false);

	function updatePosition(event) {
		topWeb = this.scrollY;
		leftWeb = this.scrollX;


		checkEventHome();
		console.log(topWeb + "," + leftWeb);
	}


	function checkEventHome() {
		thunder(400);
		showTextEffect(800, '.textParallax2', 5);
		showTextEffect(1200, '.textParallax3', 1.5);
		showElement(1200, '#bottomButtonMainPage', 6500);
	}

	function thunder(position) {
		if (topWeb >= position - 10 && topWeb <= position + 10 && thundered === false) {
			thunderEffect();
		}
	}

}]);

app.controller("WarningController", ['$scope', function($scope) {
	var elem = document.body;
	window.onload = requestFullScreen(elem);

	function requestFullScreen(element) {
		var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

		if (requestMethod) {
			requestMethod.call(element);
		} else if (typeof window.ActiveXObject !== "undefined") {
			var wscript = new ActiveXObject("WScript.Shell");
			if (wscript !== null) {
				wscript.SendKeys("{F11}");
			}
		}
	}

	$('#startBtnWarning').on('click', function() {
		console.log('Hello World!');
		evilLaughSound.play();
		$('.transitionToStart').css('opacity', '1');
		$('.transitionToStart').css('z-index', '2');
		setTimeout(function() {
			$(location).attr('href', '#/Darkest-Nightmares');
		}, 5205);
	});

}]);

app.controller("Ep1View1Controller", ['$scope', function($scope) {

	window.addEventListener("scroll", updatePosition, false);

	function updatePosition(event) {
		topWeb = this.scrollY;
		leftWeb = this.scrollX;


		checkEventEp1View1();
		console.log(topWeb + "," + leftWeb + " Ep1");
	}

	function init11() {
		setTimeout(function() {
			showText('.text-slide1', 4);
		}, 1);
		setTimeout(function() {
			showText('.text-slide1-1', 10);
		}, 3500);

	}

	/* Slider 1.2 Lettering */

	function init13() {
		showTextEffect(600, '#view11-slide2-text1', 5);
		setTimeout(settimeout1, 5000);
	}

	function settimeout1() {
		showTextEffect(600, '#view11-slide2-text2', 5);
		setTimeout(settimeout2, 5000);
	}

	function settimeout2() {
		showTextEffect(600, '#view11-slide2-text3', 5);
		setTimeout(settimeout3, 5000);
	}

	function settimeout3() {
		showTextEffect(600, '#view11-slide2-text4', 10);
		setTimeout(settimeout4, 8000);
	}

	function settimeout4() {
		showTextEffect(600, '#view11-slide2-text5', 50);
	}

	/*Lettering finished*/

	function init14() {
		if (1000 <= topWeb) {
			changeCSS('.v11e1', 'opacity', '1');
		}
	}

	function checkEventEp1View1() {
		init13();
		init14();
		init15();
	}

	function init15() {
		if (1300 <= topWeb) {
			thunderEffect();
			setTimeout(function() {
				$('.v11e2').removeClass('hid');
			},700);
		}

	}
	// tocataLoop.addEventListener('ended', function() {
	// 	this.currentTime = 0;
	// 	this.play();
	// }, false);

	init11();
}]);

var thunderSound = new Audio('mp3/thunder.mp3');
var evilLaughSound = new Audio('mp3/evilLaugh.ogg');
var tocataStart = new Audio('mp3/tocata-start.wav');
var tocataLoop = new Audio('mp3/tocata-loop.wav');

var topWeb, leftWeb;
var thundered = false;
var tocataplayed = false;


function thunderEffect() {
	if (thundered === false) {
		soundThunder();
		imageThunder();
		thundered = true;
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
	$('body').toggleClass('invert');
	$("body *").not(".invertException").toggleClass('invert');
}

function showElement(position, selector, settimeout) {
	if (position <= topWeb) {
		setTimeout(function() {
			$(selector).removeClass('hidden');
		}, settimeout);
		setTimeout(function() {
			$(selector).removeClass('visuallyhidden');
		}, settimeout+20);
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
		}, 3500);
		setTimeout(function() {
			tocataLoop.volume = 0.1;
			tocataLoop.play();
		}, 16631);
	}
}



$('.tlt').textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0 } });
