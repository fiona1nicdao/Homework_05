// variables 
var time = moment().hour();
    // note that hour is in 24hr time 
    console.log(time)

// function for Date and Time Display
var continueTime = setInterval(clock, 1000)
function clock(){
    var time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').text(time)
}
clock();

// function for color change for past, present, and future
$(".description").each(function(){
    var workTime = parseInt($(this).attr("id"));
    // console.log(this)
    // console.log(workTime)
    if(workTime < time) {
        $(this).addClass("past")
    } else if (workTime === time) {
        $(this).addClass("present")
    } else {
        $(this).addClass("future")
    }
})

// function save description for each hour 
// 1) setItem
$(".saveBtn").on("click", function() {
    var description = $(".description").val().trim();
    var timeStamp = $(".container").children(".hour").text().trim();
    console.log(timeStamp)
    localStorage.setItem(timeStamp,description)
})
// 2) getItem
var save = localStorage.getItem(timeStamp)


/*
to do list 
0) only use jQuery 
1) change colors when the time passes 
2) have the test in the boxes 
3) save information 
*/
