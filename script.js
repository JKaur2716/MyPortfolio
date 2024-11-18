console.log("JavaScript is linked!");

// Footer

const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; Jaspreet Kaur, ${currentYear}`;

console.log("Today's date is:", new Date());




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
