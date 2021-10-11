const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

// creates function and properties
const createPet = function (name, species) {
    const pet = {
      name : name,
      species: species,
      isTired: 5,
      sleep: function () {
        console.log(`${name} needs a nap. Zzzz...`);
        this.isTired = 1;
        
      }
    }
}