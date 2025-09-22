let count = 0

let interval = setInterval(() => {
    count++
    let now = new Date();
    console.log("Current time:", now.toLocaleTimeString());
    if (count === 10) {
        clearInterval(interval)
        console.log("Alarm ringing!")
        setTimeout(() => {
            console.log("The clock has stopped. Have a great day!")
        }, 5000);
    }
}, 1000);
