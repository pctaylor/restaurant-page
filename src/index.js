// Import style and modules
import './style.css';
import { loadWelcome } from './welcome.js';

console.log("hello, world");

// Initial load for welcome --------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    loadWelcome();  

    // tab content loads on click --------------------------------------------
    
    //create a div to contain the tab content
    const contentDiv = document.getElementById('content');
    const infoBox = document.createElement('div');
    infoBox.id = 'info-container';
    infoBox.innerHTML = "start test";
    contentDiv.appendChild(infoBox);
    
    // Select all elements with the class 'tab'
    const tabs = document.querySelectorAll('.tab');
    console.log(tabs);

    // Loop through each tab and add an event listener
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Handle the click event
            const tabId = this.id; // Get the id of the clicked tab
            console.log(`Tab with id ${tabId} was clicked!`);
            infoBox.innerHTML = '';
            
            // You can add more logic here to handle the click event, 
            // such as displaying the corresponding content for the clicked tab.
        });
    });
});



