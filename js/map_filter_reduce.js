// MAP FILTER REDUCE EXERCISES

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// // Create an array of the first letters of each fruit
// let first_letter_fruits = fruits.filter(function (fruit){
//     let first_letter_array = [];
//     first_letter_array.push(fruit[0]);
//     console.log(first_letter_array);
// })
//
//
// // Create array of user objects based on the customers array of objects
// // (each user object should just have name and age properties)
// let user_objects = customers.filter(function (customer){
//     create_new_object = {}
//     create_new_object.name = customer.name
//     create_new_object.age = customer.age
//     console.log(create_new_object);
//     // console.log(customer.name);
//     // customer.age
// })
// console.log(user_objects)

// Create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
let civil_servant = [];
let civil_servant_array = customers.filter(function (customer){
    if(customer.occupation.toLowerCase() === 'teacher'){
        civil_servant.push(customer);
        console.log(civil_servant);
    }else if(customer.occupation.toLowerCase() === 'police officer'){
        civil_servant.push(customer);
        console.log(civil_servant);
    }
})

// Determine the average age of all the customers
let average_age;
let average_age_collection = customers.reduce(function (sum, customer){
    return sum + customer.age
}, 0);

console.log(average_age_collection);

// Create a function makeSuperPet() that takes in the pets array as input and
// returns a single pet object with the following shape...
const SUPER_PET = {};
function createSuperPet(pets){
    let super_pet_name  = pets.reduce((single_name, pet) =>{
        return single_name + pet.name;

    }, '');
    SUPER_PET.name = super_pet_name;

    let super_pet_age  = pets.reduce((single_total, pet) =>{
        return single_total + pet.age;
    }, 0);
    SUPER_PET.age = super_pet_age;

    let super_pet_breed  = pets.reduce((single_breed, pet) =>{
        return single_breed + pet.breed;
    }, '');
    SUPER_PET.breed = super_pet_breed

}
createSuperPet(pets);
console.log(SUPER_PET);

function pugs_only(pets){
    let pug_array = [];
    pets.filter(pet =>{
        if(pet.breed.toLowerCase() === 'pug'){return pug_array.push(pet.name.length);}})
    console.log(pug_array)
}
pugs_only(pets);

function getFemaleFamilyMembers(family){
    let females = [];
    family.filter(person =>{
       if (person.gender.toLowerCase() === 'female'){
          females.push(person.name)}
       return females;
    })
    console.log(females);
}
getFemaleFamilyMembers(family);
