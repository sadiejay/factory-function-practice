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
        
      },

      play: function () {
        if (this.isTired === 10) {
          console.log(`Too tired to play!`);
          this.sleep();
          
        } else {
          console.log(`Yay! ${name} loves to play!`);
          this.isTired = 1
        }
      },
    }
    return pet;
}
//  array of pets
const dora = createPet ('Dora', 'aardvark');
const binky = createPet ('Binky', 'dog');
const baxter = createPet ('Baxter','rabbit');
const muffy = createPet ('Muffy','monkey');
const francine = createPet ('Francine','cat');

// console.log(dora, binky, baxter, muffy, francine);

// binky.sleep();
// baxter.play();

// console.log(binky, baxter);


binky.isTired = 8;
francine.isTired = 9;

// Display pets in the browser
const showPets = function (petArray) {
    pets.innerHTML = '';
    for (let pet of petArray) {
      let status = "ready to play!";
      if (pet.isTired >= 7) {
        status = 'sleeping'
      }
      let li = document.createElement('li');
      li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species} is ${status}.`;
      pets.append(li);
    }
  }
  
  statusButton.addEventListener ('click',function () {
    showPets(allPets);
  });