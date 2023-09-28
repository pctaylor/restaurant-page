export const loadWelcome = () => {
    // Select the parent div with id of "content"
    const contentDiv = document.getElementById('content');
    
    // Restaurant name
    const nameDiv = document.createElement('div');
    nameDiv.id = 'name';
    nameDiv.innerHTML = "Cannibal Joe's Human Meat Market";
    contentDiv.appendChild(nameDiv);

    // Welcome image
    const imgElement = document.createElement('img');
    imgElement.src = '../src/images/Human-cannibalism-engraving-Theodor-de-Bry.webp';
    imgElement.alt = "Canibal Joe's Human Meat Market";
    imgElement.id = 'landing-img';
    contentDiv.appendChild(imgElement);

    // Tag lin
    const tagLine = document.createElement('div');
    tagLine.id = 'tag-line'
    tagLine.innerHTML = 'Offering <em>the best</em> brains, hearts, steaks, and bones since 1919'
    contentDiv.appendChild(tagLine);
} 
