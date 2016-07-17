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
		thunderEffect()
		setTimeout(function() {
			$(location).attr('href', '/')
		}, 1800)
	});

}]);


var thunderSound = new Audio('mp3/thunder.mp3');
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
	$('body').toggleClass('invert');
}

$('.tlt').textillate({ in : { effect: 'fadeInLeftBig', initialDelay: 0 } });
