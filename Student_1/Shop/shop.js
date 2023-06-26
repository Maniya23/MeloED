//Initializing variables
//Accessing cart content
const quantity = document.getElementsByClassName("cart-quantity");
const price = document.getElementsByClassName("cart-price");
const selection = document.getElementsByClassName("select-quantity");
const input1 = document.getElementById("name-fill");
const input2 = document.getElementById("contact-fill");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
//Integers to calculate the cart
let total_price = 0;
let total = [0,0,0];
let value;
let price_int;
let item_price;
let i;
//Access item images and information
let format = document.getElementsByClassName("formats");
let item = document.getElementsByClassName("items");

//Change items on change format
format[0].addEventListener('click',()=>{
    item[0].setAttribute('src',"images/cassette1.jpg");
    item[1].setAttribute('src',"images/cassette2.jpg");
    item[2].setAttribute('src',"images/cassette3.jpg");
    reset();
});
format[1].addEventListener('click',()=>{
    item[0].setAttribute('src',"images/vinyl1.jpg"); //https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    item[1].setAttribute('src',"images/vinyl2.jpg"); //https://unsplash.com/pt-br/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    item[2].setAttribute('src',"images/vinyl3.jpg"); //https://unsplash.com/@brett_jordan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
    reset();
});
format[2].addEventListener('click',()=>{
    item[0].setAttribute('src',"images/cd1.jpg"); //https://www.freepik.com/free-vector/electro-music-album_3601855.htm#query=album%20cover&position=39&from_view=keyword&track=ais
    item[1].setAttribute('src',"images/cd2.jpg"); //https://www.freepik.com/free-vector/electro-music-album_3601853.htm#query=album%20cover&position=34&from_view=keyword&track=ais
    item[2].setAttribute('src',"images/cd3.jpg"); //https://www.freepik.com/free-psd/cd-cover-editable-template-psd-dark-tone-corporate-identity_18983286.htm#query=album%20cover&position=29&from_view=keyword&track=ais
    reset();
});


//Disabling all the buttons
btn1.disabled=true;
btn2.disabled=true;

//Enabling buttons on user inputs
function button_activation(){
    if((selection[0].value == "0" && selection[1].value == "0" && selection[2].value == "0") || (input1.value === "" || input2.value === "")){
        btn1.disabled=true;
        btn2.disabled=true;
    } else{
        btn1.disabled=false;
        btn2.disabled=false;
    }
};

input1.oninput = ()=>{
    button_activation();
};
input2.oninput = ()=>{
    button_activation();
};

//Updating cart info on user input
function cart_update(i,item_price){
    total_price -= total[i];
    total[i] = 0;
    value = selection[i].value;
    price_int = item_price*value;
    quantity[i].innerHTML = value+"x";
    price[i].innerHTML = "£"+price_int+".00";

    //Calculate the total price
    total[i] += price_int;
    total_price += total[i];
    document.getElementById("total-price").innerHTML = "£"+total_price+".00";
    button_activation();
}

//Item 1 quantity option
selection[0].addEventListener('click',()=>{
    cart_update(0,8);
});
//Item 2 quantity option
selection[1].addEventListener('click',()=>{
    cart_update(1,10);
});
//Item 3 quantity option
selection[2].addEventListener('click',()=>{
    cart_update(2,15);
});

//Express delivery update
const exD = document.getElementById("delivery");
exD.onclick = ()=>{
    if(exD.checked == true){
        quantity[3].innerHTML = "Included";
        price[3].innerHTML = exD.getAttribute("value");
        total_price += 5;
    } else {
        quantity[3].innerHTML = "Excluded"; 
        price[3].innerHTML = "£0.00"
        total_price -= 5;
    }
    document.getElementById("total-price").innerHTML = "£"+total_price+".00";
};

//Reset user inputs 
btn1.onclick = ()=>{
    reset();
};

//Function to reset user inputs
function reset(){
    selection[0].value = "0";
    selection[1].value = "0";
    selection[2].value = "0";

    input1.value = "";
    input2.value = "";

    quantity[3].innerHTML = "Excluded"; 
    price[3].innerHTML = "£0.00"
    if(exD.checked){
        total_price -= 5;
        exD.checked = false;
    }

    cart_update(0,0);
    cart_update(1,0);
    cart_update(2,0);
}

//Proceed to checkout and passing Name and Email to the checkout
function pass_input(){
    localStorage.setItem("name",input1.value);
    localStorage.setItem("Email",input2.value);
    window.location.href = "checkout.html";
}

btn2.onclick = ()=>{
    pass_input();
    window.location.href = "Checkout/checkout.html";
};
