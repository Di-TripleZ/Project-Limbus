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
		.when("/contact", {
			templateUrl: "views/formContact.html",
			controller: "ContactController"
		})
		.when("/Night-Maria", {
			templateUrl: "views/nightmaria.html",
			controller: "WhatIsController"
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
	
	/* Full Screen Request */

	// var elem = document.body;
	// window.onload = requestFullScreen(elem);

	// function requestFullScreen(element) {
	// 	var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

	// 	if (requestMethod) {
	// 		requestMethod.call(element);
	// 	} else if (typeof window.ActiveXObject !== "undefined") {
	// 		var wscript = new ActiveXObject("WScript.Shell");
	// 		if (wscript !== null) {
	// 			wscript.SendKeys("{F11}");
	// 		}
	// 	}
	// }

	/* Full Screen Request Ending */

	$('#startBtnWarning').on('click', function() {
		console.log('Hello World!');
		changeCSS('.transitionToStart', 'opacity', '1');
		changeCSS('.transitionToStart', 'z-index', '2');
		setTimeout(function() {
			$(location).attr('href', '#/Darkest-Nightmares');
		}, 5205);
	});

}]);

app.controller("Ep1View1Controller", ['$scope', '$window', function($scope, $window) {

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
			showText('.text-slide1-1', 6);
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
			thunderEffect();
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
				badEnding = false
				life();
				$scope.decision0 = 'Life is just a fight';
				$scope.decision1 = 'The weak and the strong';
				$scope.decision2 = 'She knew that';
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
					blackedOut = true;
				}
			}
		}
	}

	function initFinish() {
		if (topWeb >= 10000) {
			$window.location.href = "/#/Demo-Finished";
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

	$scope.decision0 = 'Standing there';
	$scope.decision1 = "She didn't had strength";
	$scope.decision2 = 'Nor patience';
	$scope.decision3 = 'She stood down';
	$scope.decision4 = 'Dying step by step';
	$scope.decision5 = 'Until in the end';
	$scope.decision6 = 'Everything blacked out';

}]);

app.controller("FinishLevelController", ['$scope', function($scope) {

	$(document).ready(function() {
		setTimeout(function() {
			$('.container.finish').removeClass('visuallyhidden')
		}, 100);
	});


}]);

app.controller("ContactController", ['$scope', function($scope) {

}]);

app.controller("WhatIsController", ['$scope', function($scope) {

}]);


