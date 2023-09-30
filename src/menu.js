export const menuInfo = function(parent) {

    //container to hold the grid
    const menuGrid = document.createElement('div');
    menuGrid.id = 'menu-grid';
    parent.appendChild(menuGrid);

    // add the grid cells to the menu's grid container
    for (let i = 1; i <= 6; i++) {
        const menuItem = document.createElement('div');
        menuItem.className = "menu-item";
        menuGrid.appendChild(menuItem);

        // add the sub-divs for image and description
        const menuImage = document.createElement('div');
        menuImage.className = "menu-image";
        menuImage.innerHTML = i + " image";
        menuItem.appendChild(menuImage);

        const menuDescription = document.createElement('div');
        menuDescription.className = "menu-description";
        menuDescription.innerHTML = i + " description";
        menuItem.appendChild(menuDescription);

    };
};