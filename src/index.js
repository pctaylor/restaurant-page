// Import style and modules
import './style.css';
import { loadWelcome } from './welcome.js';
import { aboutInfo } from './about';
import { menuInfo } from './menu';
import { contactInfo } from './contact';

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

    // Loop through each tab and add an event listener
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Handle the click event
            infoBox.innerHTML = '';
            const tabId = this.id; // Get the id of the clicked tab
            console.log(`Tab with id ${tabId} was clicked!`);
            if (this.id=="about") {
                aboutInfo(infoBox);
            } else if (this.id=="menu") {
                menuInfo(infoBox);
            } else if (this.id=="contact") {
                contactInfo(infoBox);
            }
        });
    });
});



