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
		.when("/Demo-Finished", {
			templateUrl: "views/finish.html",
			controller: "FinishLevelController"
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
		if (topWeb >= position - 10 && topWeb <= position + 10 && thunderedMainPage === false) {
			thunderEffect(thunderedMainPage);
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
		changeCSS('.transitionToStart', 'opacity', '1');
		changeCSS('.transitionToStart', 'z-index', '2');
		setTimeout(function() {
			$(location).attr('href', '#/Darkest-Nightmares');
		}, 5205);
	});

}]);

app.controller("Ep1View1Controller", ['$scope', function($scope) {

	$(document).ready(function() {
		time = new Date();
	});

	window.addEventListener("scroll", updatePosition, false);

	function updatePosition(event) {
		topWeb = this.scrollY;
		leftWeb = this.scrollX;


		checkEventEp1View1();
		console.log(topWeb + "," + leftWeb + " Ep1");
	}

	$(document).ready(init11());

	function checkEventEp1View1() {
		init13();
		init14();
		init15();
		init18();
		init110();
		initFinish()
	}

	function init11() {
		setTimeout(function() {
			showText('.text-slide1', 4);
		}, 400);
		setTimeout(function() {
			showText('.text-slide1-1', 10);
		}, 3500);
		thunderEffect();
		playTocata();
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

	function init15() {
		if (1300 <= topWeb) {
			thunderEffect(thunderedEp1);
			thunderedEp1 = true;
			setTimeout(function() {
				$('.v11e22').removeClass('hid');
			}, 300);
		}
		setTimeout(function() {
			$('.v11e21').removeClass('hid');
		}, 700);
	}

	function init18() {
		showElement(2300, '#followthelight', 1000);
	}

	function init110() {
		if (3800 <= topWeb) {
			updateTimeSpent();
			if (timeSpent >= badEndingTime) {
				life();
				$scope.decision0 = 'Life is just a fight';
				$scope.decision1 = 'The weak and the strong';
				$scope.decision2 = 'Just like that';
				$scope.decision3 = 'Claudia fought hard';
				$scope.decision4 = 'To survive';
				$scope.decision5 = 'An overwhelming strength';
				$scope.decision6 = 'To get out of the comma';
			} else {
				$scope.decision0 = 'Standing there';
				$scope.decision1 = "She didn't had strength";
				$scope.decision2 = 'Nor patience';
				$scope.decision3 = 'She stood down';
				$scope.decision4 = 'Dying step by step';
				$scope.decision5 = 'Until in the end';
				$scope.decision6 = 'Everything blacked out';
				death();
				if (topWeb >= 8400 && blackedOut === false) {
					invertImage();
					blackedOut = true;
				}
			}
		}
	}

	function initFinish () {
		if (topWeb >= 10000) {
			$(location).attr('href', '#/Demo-Finished');
		}
	}

	function life() {
		if (lifeplayed === false) {
			soundlife();
			setTimeout(function() {
				soundlife();
			}, 300);
			setTimeout(function() {
				soundlife();
			}, 600);
			setTimeout(function() {
				soundlife();
				medBeep.volume = 0.8
			}, 900);
			setTimeout(function() {
				soundlife();
				medBeep.volume = 0.6
			}, 1200);
			setTimeout(function() {
				soundlife();
				medBeep.volume = 0.4
			}, 1500);
			setTimeout(function() {
				soundlife();
				medBeep.volume = 0.2
			}, 1800);
			lifeplayed = true
		}
	}


	function death() {
		if (deathplayed === false) {
			sounddeath();
			deathplayed = true;
		}
	}

	function soundlife() {
		medBeep.play();
	}

	function sounddeath() {
		medDeath.play();
	}

}]);

app.controller("FinishLevelController", ['$scope', function($scope) {

}]);




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
var thunderedMainPage = false;
var thunderedEp1 = false;
var tocataplayed = false;
var lifeplayed = false;
var deathplayed = false;
var blackedOut = false;

$(document).ready(function() {
	$(".button-collapse").sideNav();
})

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
	$('body').toggleClass('invert');
	$("body *").not(".invertException").toggleClass('invert');
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