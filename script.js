// variables 
var timeDisplay = $('#currentDay');

// function for Date and Time Display
var continueTime = setInterval(clock, 1000)
function clock(){
    var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    timeDisplay.text(time)
}
clock();
