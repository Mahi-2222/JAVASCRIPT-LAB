let timer = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timer);

console.log("Cancelled");
