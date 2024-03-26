//menu tabs

const breakfastButton = document.getElementById("breakfastButton");
const lunchButton = document.getElementById("lunchButton");
const drinksButton = document.getElementById("drinksButton");

let breakfastSection = document.getElementById("breakfastSection");
let lunchSection = document.getElementById("lunchSection");
let drinksSection = document.getElementById("drinksSection");

const menuEvent = (breakfast, lunch, drinks) => {
    breakfastSection.style.display = breakfast;
    lunchSection.style.display = lunch;
    drinksSection.style.display = drinks;
};

breakfastButton.addEventListener('click', () => menuEvent("block", "none", "none"));
lunchButton.addEventListener('click', () => menuEvent("none", "block", "none"));
drinksButton.addEventListener('click', () => menuEvent("none", "none", "block"));

//end menu tabs