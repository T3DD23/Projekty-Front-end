const godzina = document.getElementById("hours");
const minuty = document.getElementById("mins");
const sekundy = document.getElementById("seconds");

function zegar() {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let second = new Date().getSeconds();


    if (hour > 12 && hour < 10) {
        hour = hour - 12;
        "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (second < 10) {
        second = "0" + second;
    }
    godzina.innerText = hour;
    minuty.innerText = minutes;
    sekundy.innerText = second;
    setTimeout(() => {
        zegar();
    }, 1000);

}

zegar();