let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
