// https://github.com/JDNafz/assignment-unit-5.1


console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: "JD",
  lastName: "Nafziger",
  hasSiblings: true,
  shoeCount: 8,
  favThreeFoods: ["bacon","pizza","ramen"]
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/


// .lastName
// ['lastName']

let fullName = me.firstName + " " + me['lastName'];
console.log("fullName: ", fullName);

let myArray = [   {name: 'JD'},               /// myArray[0]
                  {foods:['pizza','chicken']},  // myArray[1]  
                  {}    //myArray[2]
                  // {bacon: true}
              ]

let favFood = {bacon: true}
myArray.push(favFood)
console.log(myArray )

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
let firstFavoriteFood = me['favThreeFoods'][0];
console.log("first Fav Food: ",firstFavoriteFood);

let lastSelector = me.favThreeFoods.length - 1
let int = lastSelector 
let lastFavoriteFood = me.favThreeFoods[int]
console.log("last Fav Food: ",lastFavoriteFood)

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log("Current Shoe Count: ", me['shoeCount']);
me.shoeCount ++;
console.log("Current Shoe Count (after ++): ", me['shoeCount']);



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me['favoriteColor'] = "green";

console.log("reference variable added 'favoriteColor' ", me, me.favoriteColor);


me.bestFriend = "Ben";

console.log("reference variable added 'bestFriend'", me, me.bestFriend);








