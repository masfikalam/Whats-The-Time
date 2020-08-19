function displayTime() {
    // elements
    const hourBox = document.getElementById('hour');
    const minuteBox = document.getElementById('minute');
    const secondBox = document.getElementById('second');
    const ampm = document.getElementById('ampm');

    // getting time details
    let time = new Date;
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    // setting am / pm
    if (hour >= 12) {
        hour -= 12;
        ampm.innerText = 'pm';
    }

    // handling double digit || minute < 10 || hour < 10
    if (hour < 10) {
        hour = `0${hour}`;
    }
    if (minute < 10) {
        minute = `0${minute}`;
    }
    if (second < 10) {
        second = `0${second}`;
    }

    // showing the values
    hourBox.innerText = `${hour} :`;
    minuteBox.innerText = `${minute} :`;
    secondBox.innerText = `${second}`;
}

// updating every second
setInterval(displayTime, 1000);