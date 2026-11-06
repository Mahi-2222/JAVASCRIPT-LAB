const invalidJsonText = '{name: Rohan}';

try {
    JSON.parse(invalidJsonText);
} catch (error) {
    console.log("Invalid JSON");
}
