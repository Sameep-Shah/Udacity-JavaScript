// reading Json file Function
function readJson() {
    const dinoArray = [];
    fetch('./dino.json').then(response => {
        return response.json();
    }).then(data => {
        // Work with JSON data here
        // console.log(data.Dinos);

        for (var i = 0; i < data.Dinos.length; i++) {
            // console.log(data.Dinos.species);
            newObj = new Dino(
                data.Dinos[i].species,
                data.Dinos[i].weight,
                data.Dinos[i].height,
                data.Dinos[i].fact,
                data.Dinos[i].image
            )
            dinoArray.push(newObj);
        }

    }).catch(err => {
        // Do something for an error here
        console.log('Json File not present to read');
    });
    console.log(dinoArray);
    return dinoArray
}



// Create Dino Constructor
class Dino {
    constructor(species, weight, height, diet, fact, image) {
        this.species = species;
        this.weight = weight;
        this.height = height;
        this.diet = diet;
        this.fact = fact;
        this.image = image;

    }
}

// Create Dino Objects


// Create Human Object

// Use IIFE to get human data from form
(function () {
    readJson();
})();

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