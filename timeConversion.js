function timeConversion(s) {
    let [hh, mm, ...ssAA] = s.split(':');
    let hours = +hh;
    let minutes = +mm;
    let second = ssAA.toString().match(/\d+/gm)[0];
    let AMPM = ssAA.toString().match(/[a-zA-Z]+/gm)[0];
    if (AMPM === "PM" && hours < 12) hours = hours + 12;
    if (AMPM === "AM" && hours === 12) hours = hours - 12;
    let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;

    return `${sHours}:${sMinutes}:${second}`;
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:00:00:AM'));

