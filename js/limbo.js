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
		Thunder(400);
		showTextEffect(800, '.intertext2', 5);
		showTextEffect(1200, '.intertext3', 1.5);
		showFinishButton(1200);
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
		evilLaughSound.play()
		$('.transitionToStart').css('opacity', '1')
		$('.transitionToStart').css('z-index', '2')
		setTimeout(function() {
			$(location).attr('href', '#/Darkest-Nightmares')
		}, 5205)
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
		}, 1)
		setTimeout(function() {
			showText('.text-slide1-1', 10);
		}, 3500);

	}

	init11()


	function checkEventEp1View1() {}

	tocataLoop.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

}]);

var thunderSound = new Audio('mp3/thunder.mp3');
var evilLaughSound = new Audio('mp3/evilLaugh.ogg')
var tocataStart = new Audio('mp3/tocata-start.wav')
var tocataLoop = new Audio('mp3/tocata-loop.wav')

var topWeb, leftWeb;
var thundered = false;
var tocataplayed = false;



function Thunder(position) {
	if (topWeb >= position - 10 && topWeb <= position + 10 && thundered === false) {
		thunderEffect()
	}
}

function thunderEffect() {
	soundThunder();
	imageThunder();
	thundered = true;
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
	$('html').toggleClass('invert');
}

function showFinishButton(position) {
	if (position <= topWeb) {
		setTimeout(function() {
			$('#bottomButtonMainPage').removeClass('hidden');
		}, 6500);
		setTimeout(function() {
			$('#bottomButtonMainPage').removeClass('visuallyhidden');
		}, 6520);
	}
}


function showTextEffect(position, selector, delay) {
	if (position <= topWeb) {
		showText(selector, delay)
	}
}

function playTocata() {
	if (tocataplayed === false) {
		tocataPlayed = true
		setTimeout(function() {
			tocataStart.play();
		}, 3500)
		setTimeout(function() {
			tocataLoop.volume = 0.1;
			tocataLoop.play();
		}, 16631)
	}
}

function showText(selector, delay) {
	$(selector).textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0, delayScale: delay } });
	$(selector).css('display', 'inline');
}


$('.tlt').textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0 } });

