console.log("Hello. I'm just here to let you know that the javascript, is in fact, here, working, doing its best, functioning, all that. Have a nice day");


//responsive nav bar

let openHam = document.getElementById('openHam'); //lets openHam become changeable

let closeHam = document.getElementById('closeHam'); //lets closeHam become changeable

let navItems = document.getElementById('navItems'); //lets navItems become changeable

let footer = document.getElementById('footer'); //lets footer become changeable

let menuButton = document.getElementById('menuButton'); //lets menu button become changeable




// when event happens, xyz happens    
const hamburgerEvent = (navigation, close, open, bottom, button) => {
    navItems.style.display = navigation; 
    closeHam.style.display = close; 
    openHam.style.display = open; 
    footer.style.display = bottom; 
    menuButton.style.display = button;
};

// when openHam is clicked                 nav to flex,  close(X) to block,  open(bars) to none, footer to none, menu buttons to none
openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none", "none", "none"));

// when closeHam is clicked                nav to none,  close(X) to none,  open(bars) to block, footer to block, menu buttons to flex
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block", "block", "flex"));

//responsive nav bar ends



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



//modals for the gallery? basically click the painting and they pop out

//the fire
const openFire = document.getElementById("openFire");
const closeFire = document.getElementById("closeFire");
const modalFire = document.getElementById("modalFire");

openFire.addEventListener('click', function() {
    modalFire.showModal();
});
closeFire.addEventListener('click', function() {
    modalFire.close();
});

//light peace
const openLight = document.getElementById("openLight");
const closeLight = document.getElementById("closeLight");
const modalLight = document.getElementById("modalLight");

openLight.addEventListener('click', function() {
    modalLight.showModal();
});
closeLight.addEventListener('click', function() {
    modalLight.close();
});

//bird
const openBird = document.getElementById("openBird");
const closeBird = document.getElementById("closeBird");
const modalBird = document.getElementById("modalBird");

openBird.addEventListener('click', function() {
    modalBird.showModal();
});
closeBird.addEventListener('click', function() {
    modalBird.close();
});

//another look
const openLook = document.getElementById("openLook");
const closeLook = document.getElementById("closeLook");
const modalLook = document.getElementById("modalLook");

openLook.addEventListener('click', function() {
    modalLook.showModal()
});
closeLook.addEventListener('click', function() {
    modalLook.close();
});

//stop and stare
const openStop = document.getElementById("openStop");
const closeStop = document.getElementById("closeStop");
const modalStop = document.getElementById("modalStop");

openStop.addEventListener('click', function() {
    modalStop.showModal();
});
closeStop.addEventListener('click', function() {
    modalStop.close();
});

//pressure
const openPressure = document.getElementById("openPressure");
const closePressure = document.getElementById("closePressure");
const modalPressure = document.getElementById("modalPressure");

openPressure.addEventListener('click', function() {
    modalPressure.showModal();
});
closePressure.addEventListener('click', function() {
    modalPressure.close();
});

//end gallery modals

