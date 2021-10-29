// function for Date and Time Display
var continueTime = setInterval(clock, 1000)
function clock(){
    var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
    $('#currentDay').text(currentTime)
}
clock();

// function for color change for past, present, and future
var time = moment().hour();
    // note that hour is in 24hr time
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
$(".saveBtn").on("click", saveDescription)
function saveDescription(event){
    event.preventDefault();
    // console.log(event)
    var description = $(this).siblings(".description").val().trim();
    var timeStamp =$(this).siblings(".hour").text().trim();
    localStorage.setItem(timeStamp,JSON.stringify(description))
}

// 2) getItem
function displayDescription() {
    var save9 = JSON.parse(window.localStorage.getItem("9AM"))
        $("#9am")[0].innerHTML=save9 
    var save10 = JSON.parse(window.localStorage.getItem("10AM"))
        $("#10am")[0].innerHTML=save10  
    var save11 = JSON.parse(window.localStorage.getItem("11AM"))
        $("#11am")[0].innerHTML=save11
    var save12 = JSON.parse(window.localStorage.getItem("12PM"))
        $("#12pm")[0].innerHTML=save12
    var save1pm = JSON.parse(window.localStorage.getItem("1PM"))
        $("#13pm")[0].innerHTML=save1pm
    var save2pm = JSON.parse(window.localStorage.getItem("2PM"))
        $("#14pm")[0].innerHTML=save2pm
    var save3pm = JSON.parse(window.localStorage.getItem("3PM"))
        $("#15pm")[0].innerHTML=save3pm
    var save4pm = JSON.parse(window.localStorage.getItem("4PM"))
        $("#16pm")[0].innerHTML=save4pm
    var save5pm = JSON.parse(window.localStorage.getItem("5PM"))
        $("#17pm")[0].innerHTML=save5pm   
}

// prevent refreshing page
function init() {
    displayDescription() 
}
init()