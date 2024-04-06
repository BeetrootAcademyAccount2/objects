const owner = Symbol("owner");
const ownerAge = 50;
const ownerProfession = "Taxi driver";

const cat1 = {
  firstName: "Johnny",
  secondName: "Johnson",
  [owner]: "Fred",
  age: 3,
  breed: "Persian",
  //   talk: function () {
  //     console.log(`Hello, my name is ${this.firstName}`);
  //   },
  talk(age, profession) {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName}`);
    console.log(`My owner is ${age} years old and he is a ${profession}`);
  },
};

// cat1.talk(ownerAge, ownerProfession);

const result = cat1.talk;
//result.call(cat1, ownerAge, ownerProfession);
//result.apply(cat1, [ownerAge, ownerProfession]);
const execute = result.bind(cat1, ownerAge, ownerProfession);
execute();

/*
for (let key in cat1) {
  if (typeof cat1[key] === "string" || typeof cat1[key] === "number") {
    cat2[key] = cat1[key];
  }
}
*/

// const cat2 = {
//   firstName: cat1.firstName,
//   secondName: cat1.secondName,
// };

// cat2.firstName = "Sam";
// cat2.age = 2;
let cat2 = { ...cat1, firstName: "Steve", color: "white" };

const { firstName, secondName, color, age } = cat1;

const cat3 = {
  firstName: firstName,
  secondName: secondName,
  age: age,
};

// const cat2 = Object.assign(cat3, cat1);
//const cat2 = Object.create(cat1);

// for (const [key, value] of Object.entries(cat1)) {
//   cat2[key] = value;
// }

//cat2 = Object.fromEntries(Object.entries(cat1));

// const isColorPresent = cat1.hasOwnProperty("firstName");

//const isColorPresent = Object.hasOwn(cat1, "firstName");

// Object.freeze(cat1);

// cat1.firstName = "Sasha";
// cat1.color = "white";
// delete cat1.breed;

//console.log(isColorPresent);

// console.log(cat1);
// console.log(cat2);
// console.log(cat3);
