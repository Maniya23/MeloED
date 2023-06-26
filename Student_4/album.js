//Declaring font size variable
let font1 = document.getElementById("normal-font");
let font2 = document.getElementById("medium-font");
let font3 = document.getElementById("bigger-font");

// Declaring variables for QuerySelectors
let element_P = document.querySelector("p");
let element_i = document.querySelector("i");

// Declaring color variables
let clrDark = document.getElementById("color-dark");
let clrRand = document.getElementById("color-rand");
let clrLight = document.getElementById("color-light");

// Assigning body
let body = document.body;


// Declaring image variables
let img1 = document.getElementById("image1");
let img2 = document.getElementById("image2");
let img3 = document.getElementById("image3");
let img4 = document.getElementById("image4");
let img5 = document.getElementById("image5");


// Declaring album description variables
let album1 = document.getElementById("album1");
let album2 = document.getElementById("album2");
let album3 = document.getElementById("album3");
let album4 = document.getElementById("album4");
let album5 = document.getElementById("album5");

// Variable for back-to-top button
let topbtn = document.getElementById("back-to-top-btn");

// Window scroll for back to top button
window.onscroll = function () {back_To_Top()};

function back_To_Top() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        topbtn.style.display = "block";
    } else {
        topbtn.style.display = "none";
    }
};

topbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// Changing website fonts

// Normal font
font1.addEventListener("click", () => {
    element_P.style.fontSize="25px";
    element_i.style.fontSize="55px";
});

// Medium font
font2.addEventListener("click", () => {
    element_P.style.fontSize="1.8rem";
    element_i.style.fontSize="4rem";
});

// Bigger font
font3.addEventListener("click", ()=> {
    element_P.style.fontSize="2.5rem"
    element_i.style.fontSize="5.5rem"
});

// Changing website colors

// Dark
clrDark.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(18, 17, 17)";
    document.body.style.color="white";
});

// Random
clrRand.addEventListener("click", () => {
    // Random color generator
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
});

// Light
clrLight.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color="black"; 
});


// Displaying and hiding album details 
img1.addEventListener("mouseover", () => {
    album1.style.display = "block";

});

img1.addEventListener("mouseout", () => {
    album1.style.display = "none";
});

img2.addEventListener("mouseover", () => {
    album2.style.display = "block";
});

img2.addEventListener("mouseout", () => {
    album2.style.display = "none";
});

img3.addEventListener("mouseover", () => {
    album3.style.display = "block";
});

img3.addEventListener("mouseout", () => {
    album3.style.display = "none";
});

img4.addEventListener("mouseover", () => {
    album4.style.display = "block";
});

img4.addEventListener("mouseout", () => {
    album4.style.display = "none";
});

img5.addEventListener("mouseover", () => {
    album5.style.display = "block";
});

img5.addEventListener("mouseout", () => {
    album5.style.display = "none";
});


