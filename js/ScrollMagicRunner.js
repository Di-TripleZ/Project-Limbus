// When the DOM is ready
$(function() {

  // Init ScrollMagic Controller
  var scrollMagicController = new ScrollMagic.Controller();

  // Create Animation for 0.5s
  var tween = TweenMax.to('#transitionToWhite', 0.5, {
    opacity: 1,
  });
  var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 420,
      duration: 500
    })
    .setPin(".showDecision")
    .addTo(scrollMagicController);

  // Create the Scene and trigger when visible
  var scene = new ScrollMagic.Scene({
      triggerElement: '#transition1',
      offset: 1000,
      /* offset the trigger 150px below #scene's top */
      duration: 400
    })
    .setTween(tween)
    .addTo(scrollMagicController);



  // Add debug indicators fixed on right side
  scene.addIndicators();
});
