

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

