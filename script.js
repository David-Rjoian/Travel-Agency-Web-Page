window.onload = function () {
    document.getElementById('up').style.transform = "translate(0,0)";
}

let back = 1;

setInterval(background, 5000);

function background() {
    document.getElementById('body').style.backgroundImage = `url('pictures/${back}.jpg')`;
    back = (back % 3) + 1;
}

let logo = document.getElementById("logo");
let down = document.getElementById('downMenu');
let body = document.getElementById('body');


let aboutUs = document.getElementById('aboutUs');
let aboutUsBlock = document.getElementById('aboutUsBlock');
aboutUsBlock.style.display = "none";

let tours = document.getElementById('tours');
let toursBlock = document.getElementById('toursBlock');
toursBlock.style.display = "none";

let contact = document.getElementById('contact');
let contactBlock = document.getElementById('contactBlock');
contactBlock.style.display = "none";

aboutUs.onclick = function () {
    toursBlock.style.display = "none";
    contactBlock.style.display = "none";
    down.style.transform = "translate(0,100%)";

    aboutUsBlock.style.display = "block";
    aboutUsBlock.style.animation = "fadeaway 1s reverse";
};

tours.onclick = function () {
    aboutUsBlock.style.display = "none";
    contactBlock.style.display = "none";
    down.style.transform = "translate(0,100%)";

    toursBlock.style.display = "block";
    toursBlock.style.animation = "fadeaway 1s reverse";
};

contact.onclick = function () {
    aboutUsBlock.style.display = "none";
    toursBlock.style.display = "none";
    down.style.transform = "translate(0,100%)";

    contactBlock.style.display = "block";
    contactBlock.style.animation = "fadeaway 1s reverse";
};

logo.onclick = function () {
    aboutUsBlock.style.display = "none";
    toursBlock.style.display = "none";
    contactBlock.style.display = "none";
    down.style.transform = "translate(0,0)";
};