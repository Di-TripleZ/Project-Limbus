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
		setTimeout(function() {
			$(location).attr('href', '#/Darkest-Nightmares')
		}, 5205)
	});

}]);

app.controller("Ep1View1Controller", ['$scope', function($scope) {


}]);

var thunderSound = new Audio('mp3/thunder.mp3');
var evilLaughSound = new Audio('mp3/evilLaugh.ogg')

var thundered = false;
var topWeb, leftWeb;

window.addEventListener("scroll", updatePosition, false);

function updatePosition(event) {
	topWeb = this.scrollY;
	leftWeb = this.scrollX;


	checkEvent();
	console.log(topWeb + "," + leftWeb);
}


function checkEvent() {
	Thunder(400);
	showTextEffect(800, '.intertext2', 5);
	showTextEffect(1200, '.intertext3', 1.5);
	showFinishButton(1200);
}

function Thunder(position) {
	if (topWeb >= position - 10 && topWeb <= position + 10 && thundered === false) {
		thunderEffect()
	}
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

$('.tlt').textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0 } });
