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

    // Tag line
    const tagLine = document.createElement('div');
    tagLine.id = 'tagLine'
    tagLine.innerHTML = 'Offering <em>the best</em> brains, hearts, steaks, and bones since 1919'
    contentDiv.appendChild(tagLine);

    // Tab Container
    const tabBox = document.createElement('div');
    tabBox.id = 'tab-container';
    contentDiv.appendChild(tabBox);

    // Tabs
    let tabNames = ['about', 'menu', 'contact']
    tabNames.forEach(function(tabName) {
        const tab = document.createElement('div');
        tab.className = "tab"
        tab.id = tabName;
        tab.innerHTML = tabName.toUpperCase();
        tabBox.appendChild(tab);
    });
} 
