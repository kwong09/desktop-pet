
let currentTime = document.getElementById("currentTime")

//updates clock
setInterval(() => {
    const localTime = new Date().toLocaleTimeString()
    currentTime.innerHTML = localTime
}, 1000)
