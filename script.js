console.log("JavaScript is linked!");

// Footer

const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; Jaspreet Kaur, ${currentYear}`;

console.log("Today's date is:", new Date());



// Greetings
const greeting = document.getElementById("greeting");
const hours = new Date().getHours();

let message = "";
let className = "";

if (hours < 12) {
    message = "Good morning!";
    className = "morning";
} else if (hours < 17) {
    message = "Good afternoon!";
    className = "afternoon";
} else {
    message = "Good evening!"; 
    className = "evening";    
}
greeting.textContent = message; 
greeting.className = className; 

// Button 

const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", () => {
    alert("Hello! I hope you're doing well :)");
});

alertButton.addEventListener("mouseover", () => {
    alertButton.innerText = "Good! Now, click!";
});

alertButton.addEventListener("mouseout", () => {
    alertButton.innerText = "Click me";
});