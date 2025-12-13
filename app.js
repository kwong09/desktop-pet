
let headerOne = document.getElementById("headerOne")

setInterval(() => {
    const localTime = new Date().toLocaleTimeString()
    headerOne.innerHTML = localTime
}, 1000)
