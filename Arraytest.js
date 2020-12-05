let origDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array ("Americal Curl", "Bengal");
let birds = new Array("Falcons", "Ducks", "Flamingoes");

//Array Copy Elements
let sliceDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack Functions (LIFO) Push and Pop
let pushDog = dogs.push("Gloden Retriever");
let poopDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and Remove from First
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

//Atomic add and remove elements (where, how many to remove, element List)
dogs.splice(2, 1, "Pug", "Boxer");

//Array Function - Concat, Slice and Sort
let animals = dogs.concat(cats, birds);
let newAnimals = [...dogs, ...cats, ...birds].toString();
let SortDog = dogs.slice(0).sort();
function scanArray([first, second])
{
    console.log("Scan: " +first + " " + second);
}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = "";
for (let animal of animals) allAnimals += animal + " ";

console.log("Animals : " + allAnimals);