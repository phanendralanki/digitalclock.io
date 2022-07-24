const hourE1 = document.getElementById('hour');

const minutesE1 = document.getElementById('min');

const secondE1 = document.getElementById('sec');

const ampmE1 = document.getElementById("ampm");


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h-12
        ampm = "PM"
    }

    // update time

    h = h<10? "0"+h:h;  //01,02,.....09
    m = m<10? "0"+m:m;
    s = s<10? "0"+s:s;


    // Time Adding starts here
    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;

    setTimeout(() =>{
        updateClock()
    },1000)
}

updateClock()