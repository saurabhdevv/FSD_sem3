// In a browser, we commonly use:
button.addEventListener("click", function() {
    console.log("Button clicked");
});
// We can simulate similar behavior in Node.js:
const EventEmitter = require("events");

const button = new EventEmitter();

// DOM-like event listener
button.on("click", () => {
    console.log("Button was clicked!");
});

button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

button.on("click", () => {
    console.log("Performing another click action...");
});

// Simulate events
console.log("Simulating click...");
button.emit("click");

console.log("Simulating mouseover...");
button.emit("mouseover");
