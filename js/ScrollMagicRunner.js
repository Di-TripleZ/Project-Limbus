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
      offset: 500,
      duration: 500
    })
    .setPin("#decision0")
    .addTo(scrollMagicController);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 1100,
      duration: 500
    })
    .setPin("#decision1")
    .addTo(scrollMagicController);

      var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 1700,
      duration: 500
    })
    .setPin("#decision2")
    .addTo(scrollMagicController);

  var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 2300,
      duration: 500
    })
    .setPin("#decision3")
    .addTo(scrollMagicController);

      var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 2900,
      duration: 500
    })
    .setPin("#decision4")
    .addTo(scrollMagicController);

      var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 3500,
      duration: 500
    })
    .setPin("#decision5")
    .addTo(scrollMagicController);

      var scene = new ScrollMagic.Scene({
      triggerElement: "#transition2",
      offset: 4100,
      duration: 500
    })
    .setPin("#decision6")
    .on("enter", invertImage)
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

});
