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