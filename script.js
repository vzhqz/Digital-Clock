let is24HourFormat = localStorage.getItem("is24HourFormat") === "true";

function updateTime() {
    const time = document.getElementById("time");
    const now = new Date();
    
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    let meridiem = "";

    if (!is24HourFormat) {
        meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
    }

    hours = hours.toString().padStart(2, 0);

    time.textContent = `${hours}:${minutes}:${seconds} ${meridiem}`;
}

document.getElementById("time").addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem("is24HourFormat", is24HourFormat);
    updateTime();
});

updateTime();
setInterval(updateTime, 1000);