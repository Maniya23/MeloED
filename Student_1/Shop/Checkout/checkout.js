//Initilizing variables (forms)
let song_info = document.getElementById("song-info");
let btn1 = document.getElementById("pay");
let btn2 = document.getElementById("enter-song-info");

const billing_input1 = document.getElementById("fill-billing1");
const billing_input2 = document.getElementById("fill-billing2");
const billing_input3 = document.getElementById("fill-billing3");
const billing_input4 = document.getElementById("fill-billing4");

const card_input1 = document.getElementById("fill-card1");
const card_input2 = document.getElementById("fill-card2");
const card_input3 = document.getElementById("fill-card3");

let clicked = 0;
btn2.onclick = ()=>{
    if(clicked == 0){
        song_info.style.display = "block";
        clicked = 1;
    } else {
        song_info.style.display = "none";
        clicked = 0;
    }
};

//Input filled check on pay butoon click
let filled;
let form = document.getElementsByTagName("input");
let i;

function check_fillings(){
    for(i=0;i<7;i++){
        form[i].style.animation = "";
        if(form[i].value == "" || form[i].value < 000 && form[i].value > 999){
            alert("Please fill the checkout details");
            form[i].style.animation = "color-alert 2s";
            filled = false;
            break;
        } else {
            form[i].style.animation = "color-alert-filled 2s";
            filled = true;
        }
    }
    console.log(filled);
}

btn1.addEventListener('click', ()=>{
    if(!filled){
        check_fillings();
    } else{
        openPopup();
    }
})

//Getting user inputs from the previous buy products page
billing_input1.value = localStorage.getItem("name");
billing_input2.value = localStorage.getItem("Email");

//Opening purchased popup message
const popupContainer = document.getElementById("popup-container");
const popupOverlay = document.getElementById("popup-overlay");

function openPopup(){
    if(billing_input1.value === ""){
        return;
    }
    popupContainer.style.display = "block";
    popupOverlay.style.display = "block";
}


