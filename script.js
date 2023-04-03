console.log("connected");

//Assign variables for personal information
const firstName = "John";
const lastName = "Smith";
const age = 30;
const hobbies = ["Biking", "Mountain Climbing", "Swimming"];


// Define functions
console.log('Hello World!');

function userInfo () {
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Age: ${age}`);
}
userInfo();

function hobbiesInfo() {
    console.log(`Hobbies: (${hobbies.length}) ${hobbies}`);
}
hobbiesInfo();

//Assign constants for work address
const city = "Lincoln";
const houseNumber = 32;
const state = "Nebraska";
const street = "Washington";

function workAddress () {
console.log('Work Address:');
console.log(`city:${city}`);
console.log(`House Number: ${houseNumber}`);
console.log(`State:${state}`);
console.log(`Street: ${street}`);

}
workAddress ();


console.log(`${firstName} ${lastName} is ${age} years of age`);
console.log(`His hobbies are: eating, sleeping, bingewatching`);
console.log(`City:${city}`);
console.log(`House number: ${houseNumber}`);
console.log(`State: ${state}`);
console.log(`Street: ${street}`);

function relationshipStatus() {
    const isMarried = true;
    console.log(`The value of Married is : ${isMarried}`);
  }
relationshipStatus();  
