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
class human {
    constructor(name, height, weight, diet) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.diet = diet;
        this.image = "./human.png";

    }
}

// Use IIFE to get human data from form
(function () {
    readJson();
    document.querySelector("#btn").addEventListener("click", function () {
        const humanName = document.querySelector("#name").value;
        const humanHeight = Number(document.querySelector("#feet").value) * 12 + Number(document.querySelector("#inches").value);
        const humanWeight = Number(document.querySelector("#weight").value);
        const humanDiet = document.querySelector("#diet").value;
        const HumanObj = new human(humanName, humanHeight, humanWeight, humanDiet);

    });
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