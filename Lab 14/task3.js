let count = 0;

let timer = setInterval(() => {
    console.log("Tick");

    count++;

    if (count === 3) {
        clearInterval(timer);
    }
}, 200);
