export const contactInfo = function(parent) {

    // create a grid
    const contactgrid = document.createElement('div');
    contactgrid.id = 'contact-grid'
    parent.appendChild(contactgrid);

    // LHS for Location ------------------------------------------
    const locationInfo = document.createElement('div');
    locationInfo.id = "location-info";
    contactgrid.appendChild(locationInfo);

    // Location on Map
    const locationMap = document.createElement('div');
    locationMap.id = 'location-map';
    locationMap.innerHTML = 'map'
    locationInfo.appendChild(locationMap);

    // Address
    const locationAddress = document.createElement('div');
    locationAddress.id = 'location-address';
    locationAddress.innerHTML = '1234 E Fleischmann St <br> Littlesburg, NY 012345'
    locationInfo.appendChild(locationAddress);

    // RHS for phone, email, socials ------------------------------
    const outreachInfo = document.createElement('div');
    outreachInfo.id = "outreach-info"
    outreachInfo.innerHTML = "phone <br> email <br> socials"
    contactgrid.appendChild(outreachInfo);
};