
const clock = document.querySelector("#clock-container h3");

function patinClock() {
    const time = new Date();
    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(patinClock, 1000);  

// 새로고침 할 때 마다 보였다가 안보였다가 함