// this variable has been declared globally 

//array with hamburger and cheeseburger has been created and initialized 
let burgers = [`Hamburger`,`Cheeseburger`];
// verifies drkins has been creates and initialised 
let featuredDrink = `Strawberry milkshake`;

//* fuction and scope 
function addBurger() {
    let newBurger = `Flatburger`;
    // Add the function -scoped  burger to the global array

    burgers.push(newBurger);
}

//Variable declaration and Scope (Block scope)
if(true) {
let newBurgers = `Maple Bacon Burger `;
//add the block scoped burger to global array 
burgers.push(newBurgers);

}
 //changing of string functions 

 function ChangeFeaturedDrink() {
    //updates the global featuredDrink to the new value 
    featuredDrink =` The JavaShake`;
 }
