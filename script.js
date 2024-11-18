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

// Button 
const alertButton = document.getElementById("btn-alert");
if (alertButton) {
    alertButton.addEventListener("click", () => {
        alert("Hello! I hope you're doing well :)");
    });

    alertButton.addEventListener("mouseover", () => {
        alertButton.innerText = "Good! Now, click!";
    });

    alertButton.addEventListener("mouseout", () => {
        alertButton.innerText = "Click me";
    });
} else {
    console.error("Button with id 'btn-alert' not found.");
}

// List of my favorite hiking spots on about me page
const hikingPlaces = [
    { name: "Johnston Canyon", url: "https://www.banfflakelouise.com/johnston-canyon" },
    { name: "Jasper National Park", url: "https://www.jasper.travel/" },
    { name: "Lake Louise", url: "https://www.banfflakelouise.com/lake-louise" },
    { name: "Kananaskis Country", url: "https://kananaskis.com/" },
    { name: "Rawson Lake", url: "https://www.banfflakelouise.com/rawson-lake" } // Updated to Rawson Lake
];

// Get the ordered list element by ID
const placesList = document.getElementById("hikingPlaces");
console.log(placesList); // checking

if (placesList) {
    for (let i = 0; i < hikingPlaces.length; i++) {
        console.log("Adding list item:", hikingPlaces[i].name); // Debugging line
        const listItem = document.createElement("li");
        const link = document.createElement("a");

        link.href = hikingPlaces[i].url;
        link.textContent = hikingPlaces[i].name;

        // Links should open in a separate tab
        link.target = "_blank"; 

        listItem.appendChild(link);
        placesList.appendChild(listItem);
    }
} else {
    console.error("Element with id 'hikingPlaces' not found.");
}