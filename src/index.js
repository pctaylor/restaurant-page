import './style.css';
import { loadWelcome } from './welcome.js';

console.log("hello, world");

document.addEventListener('DOMContentLoaded', function() {
    loadWelcome();  
});