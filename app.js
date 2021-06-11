// reading Json file Function
function readJson() {
    fetch('./dino.json').then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        console.log(data);
    }).catch(err => {
        // Do something for an error here
        console.log('File not present');
    });
}



// Create Dino Constructor
class Dino {
    constructor() {}
}
(function () {
    readJson();
})();
// Create Dino Objects


// Create Human Object

// Use IIFE to get human data from form


// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches. 


// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.


// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.


// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen


// On button click, prepare and display infographic