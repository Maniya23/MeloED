//Navigation ba and back to top button pop up on scroll
window.onscroll = ()=>{
    if(document.documentElement.scrollTop > 100){
        document.getElementById("navbar").style.top = "0";
        document.getElementById("back-to-top-btn").style.bottom = "10px";
    } else{
        document.getElementById("navbar").style.top = "-100px";
        document.getElementById("back-to-top-btn").style.bottom = "-90px";
    }
}

//Initializing variables
let label = document.getElementsByTagName("label");
let row = document.getElementsByClassName("rows");
const content = document.getElementsByClassName("content");
const title = document.getElementsByTagName("h2");

//Function to expand content
let i;
function expand_content(i){
    content[i].style.opacity = "1";
    content[i].style.transition = "1000ms";
    row[i].style.height = "1000px";
    label[i].style.opacity = "0";
    label[i].style.transition = "1000ms";
    title[i].style.opacity = "1";
    title[i].style.transition = "1000ms";
    title[i].style.transitionDelay = "1500ms";
}

//Expands on click
label[0].onclick = ()=>{
    expand_content(0);
};
label[1].onclick = ()=>{
    expand_content(1);
};
label[2].onclick = ()=>{
    expand_content(2);
};
label[3].onclick = ()=>{
    expand_content(3);
};

//Expands on navigation bar links
const nav_btn = document.getElementsByClassName("content-nav");
nav_btn[0].onclick = ()=>{
    expand_content(0);
};
nav_btn[1].onclick = ()=>{
    expand_content(1);
};
nav_btn[2].onclick = ()=>{
    expand_content(2);
};
nav_btn[3].onclick = ()=>{
    expand_content(3);
};