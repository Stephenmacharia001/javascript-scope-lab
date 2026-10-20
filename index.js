// this variable has been declared globally 

//array with hamburger and cheeseburger has been created and initialized 
const burgers = [`Hamburger`,`Cheeseburger`];
// verifies drkins has been creates and initialised 
let featuredDrink = `Strawberry milkshake`;

//* fuction and scope 
function addBurger() {
    const newBurger = `Flatburger`;
    // Add the function -scoped  burger to the global array

    burgers.push(newBurger);
}

//Variable declaration and Scope (Block scope)
if(true) {
const newBurgers = `Maple Bacon Burger `;
// Use the .push()array method to add anotherNewburger to the burgers array 
burgers.push(newBurgers);

}
 //changing of string functions 

 function ChangeFeaturedDrink() {
    //updates the global featuredDrink to the new value 
    featuredDrink =` The JavaShake`;
 }
