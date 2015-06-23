'use strict';


$(document).ready(function() {

  // jQuery("#responsive_headline").fitText();

  var context = new AudioContext();
  var brownNoise = context.createBrownNoise();

  // var brownLfo = context.createOscillator();
  // brownLfo.frequency.value = 0.01;
  // brownNoise.connect(brownLfo);
  // var lfoGain = context.createGain();
  // brownLfoGain.gain.value = 0.01;
  // brownNoise.connect(brownLfoGain);

  var brownGain = context.createGain();
  brownGain.gain.value = 0;
  brownNoise.connect(brownGain);
  brownGain.connect(context.destination);
  // var mute = false;

  // when over a leaf of grass it starts wobbling and the brown noise begins
  $('body').on('mouseover', '.grass', function() {
    var blade = this;
    $(blade).addClass('animated infinite wobble');
    updateBrownGain();
    // Make the blades stop moving after 3 seconds.
    window.setTimeout(function(){
      $(blade).removeClass('animated infinite wobble');
      updateBrownGain();
    }, 8000);
  });

// make an infinite field


  $( window ).scroll(function() {
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  $( '<div class="grass"></div>' ).clone().appendTo( '#moregrass');
  });

  var updateBrownGain = function() {
    var numMovingBlades = $('.animated').length;
      brownGain.gain.value = numMovingBlades/200;
  }

});
