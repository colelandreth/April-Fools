var jokes, random, randomjoke, click, text

var jokes = [
    "Plant a grass garden in your coworker’s keyboard",
    "Install an airhorn as a door wall protector",
    "Turn their windshield wipers into a rainbow paintbrush",
    "Air Freshner Bomb. Pull the zip-tie, throw it, and run!",
    "Paint soap with clear nail polish and leave it in the shower",
    "Infest their office with (fake) rats",
    "Attach an airhorn to their seat",
    "Make their worst nightmare a grim reality",
    "Make their Oreos taste minty fresh (make sure the toothpaste is edible*)",
    "Give their car a bright new paint job (with sticky notes)",
    "Introduce them to mayonnaise-filled donuts",
    "Dip cotton balls in water and leave them to freeze overnight",
    "Delight their taste buds with caramel onions",
    "Make sure their car is nice and safe with packing cling wrap",
    "Fake Spilled Coffee",
    "Jelly Beans in Ice Dispencer",
    "Wrap grapes in Easter egg foils",
    "Glass of Juice (which is Jell-o!)",
    "Frost a sponge like a brownie",
    "Box of doughnuts filled with veggies",
    "Bubble wrap under a rug",
    "Fake Bugs under light shades",
];

click = document.getElementById("click").addEventListener("click", randomize);


function randomize(){
    random =  Math.floor((Math.random() * jokes.length));
    randomjoke=jokes[random];
    text = document.getElementById("h3").innerHTML = randomjoke;
};