function billWithTax(amount, taxRate = 0.18) {
    return amount + (amount * taxRate);
}

console.log(billWithTax(100));
