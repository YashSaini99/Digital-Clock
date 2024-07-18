let dayText = document.querySelector(".day")
let monthText = document.querySelector(".month")
let dateText = document.querySelector(".date")
let yearText = document.querySelector(".year")

let timeText = document.querySelector(".time-display")
let ampmText = document.querySelector(".ampm")

function updateTime(){
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let ampm = 'AM';

    let day = date.getDay();
    let month = date.getMonth();
    let dayDate = date.getDate();
    let year = date.getFullYear();

    console.log(dayDate, day, month, year);

    let dateArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let monthArray = ["January","Feburary","March","April","May","June","July","August","September","October","November","December"];

    dayText.textContent = dateArray[day];
    monthText.textContent = monthArray[month];
    dateText.textContent = dayDate;
    yearText.textContent = year;

    if(hrs>12){
        hrs = hrs - 12;
        ampm = "PM";
    }
    if(hrs == 0){
        hrs = 12;
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    timeText.textContent = hrs + ":" + mins + ":" + secs;
    ampmText.textContent = ampm;
}

setInterval(updateTime, 1000);