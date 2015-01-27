$(document).on('ready', function() {


	// DOM ELEMENTS TO BE ADDED
  var outerShell = $('<div class="outerShell"></div>');
  var innerShell = $('<div class="innerShell"></div>');
  var labels = $('<div class="clockLabels">PM</div>');

  var radioButtons = $('<input type="radio" name="PM" checked ="PM"/>')

  var clockScreen = ('<div class="clockScreen"></div>');
  var radioStations = $('<div class="station"><p class="tuner am"><span class="amTitle">AM</span></p><p class="tuner pm"><span class="pmTitle">PM</span></p> </div>');


  

  var numbers = ['53', '60', '70', '90', '100'];
  var lowerNumbers = ['88', '92', '96', '102', '106'];
  // var fm = $('<div class="fm"> ');
  var numberEls = numbers.map(function(number) {
  	return $('<span class="tunerLabel">' +number + '</span>');
  });

  var lowerNumbersEls = lowerNumbers.map(function(lower) {
  	return $('<span class="tunerLabel">' + lower + '</span>');
  })


  $('.container').append(outerShell);
  $(outerShell).append(innerShell);
  $(innerShell).append(labels);
  $(innerShell).append(clockScreen);
  $(innerShell).append(radioStations);

  $('.am').append(numberEls);
  $('.pm').append(lowerNumbersEls);

  console.log($('.am'));
  console.log($('.pm'));




});