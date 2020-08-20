function displayTime() {
    // elements
    const timeBox = document.getElementById('myTime');
    const dayBox = document.getElementById('myDay');
    const dateBox = document.getElementById('myDate');

    // getting time details
    let time = new Date;
    let myTime = time.toLocaleTimeString();
    let date = time.toDateString().split(' ');
    let myDay = date[0];
    let myDate = `${date[2]} / ${date[1]} / ${date[3]}`;

    // showing the values
    timeBox.innerText = myTime;
    dayBox.innerText = myDay;
    dateBox.innerText = myDate;
}

// updating every second
setInterval(displayTime, 1000);