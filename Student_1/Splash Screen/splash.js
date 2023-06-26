// Variable Declaration
let body = document.getElementsByTagName("body");
let splash = document.getElementById("splash-scr");
let square1 = document.getElementById("square-half1");
let square2 = document.getElementById("square-half2");
let names = document.querySelectorAll(".student-name");

// Display content on load
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
      square1.classList.add('slideUp');
      square2.classList.add('slideLeft');
      splash.classList.add('fadeOut');

      //Display name with time delays
      names.forEach((name, index)=>{
        setTimeout(()=>{
          name.classList.add('slideIn');
        },700*(index+1));
      })

      setTimeout(()=>{
        body[0].style.backgroundImage = "url(bg.jpg)";
        setTimeout(()=>{
          splash.classList.remove('fadeOut');
        },4500)
      },1000);

      setTimeout(()=>{
        square1.classList.remove('slideUp');
        square2.classList.remove('slideLeft');
        body[0].style.backgroundImage = "";
        document.getElementById("message").style.display = "block";
      },7000);
    },500);
})