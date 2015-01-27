$(document).on('ready', function() {


	// DOM ELEMENTS TO BE ADDED
  var outerShell = $('<div class="outerShell"></div>');
  var innerShell = $('<div class="innerShell"></div>');
  var labels = $('<div class="clockLabels"></div>');

  var pmRadioButton = $('<div class="radio"><span class="labelTitle">PM</span><input type="radio" name="PM" /></div>')
  var autoRadioButton = $('<div class="radio"><span class="labelTitle">Auto</span><input type="radio" name="Auto"/></div')

  var clockScreen = $('<div class="clockScreen"></div>');
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

  var getTime = $('div>')

  var time = new Date();
  var hours = time.getHours() +":";
  var standardTime = parseInt(hours +11)%12 + 1;
  // var standardTime = function(hours){
  // 	if(hours >12) {
  // 		hours = hours-12;
  // 	}
  // 	return hours;
  // };

  var seconds = time.getSeconds();
  var minutes = time.getMinutes() ;
  console.log(hours,minutes);
  console.log(standardTime +":" + minutes);


  $('.container').append(outerShell);
  $(outerShell).append(innerShell);
  $(innerShell).append(labels);
  $(innerShell).append(clockScreen);
  $(clockScreen).append(standardTime +":" +minutes);
  // $(clockScreen)append(standardTime(hours)+":" +minutes);

  $(innerShell).append(radioStations);
  $(labels).append(pmRadioButton);
  $(labels).append(autoRadioButton);

  $('.am').append(numberEls);
  $('.pm').append(lowerNumbersEls);

  console.log($('.am'));
  console.log($('.pm'));




});