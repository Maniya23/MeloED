/*making the top button appear when the user scrolls down 200px*/
window.onscroll = ()=> {
    var topBtn = document.getElementById('topBtn');
    if (document.documentElement.scrollTop > 200) {
      topBtn.style.opacity = .7;
      
    }else{
      topBtn.style.opacity = 0;
    }
  }
  

/*making the images change every 3 seconds*/
var myIndex = 0;
const slideshowText = document.querySelector('.slideshow-text');
slideShow();


function slideShow() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
 
    }
    myIndex++;

    if (myIndex > x.length) {myIndex = 1}
    /*changing the text of the slideshow*/
    if(myIndex==1){
    slideshowText.innerHTML = "Keyboard"
    }
    if(myIndex==2){
    slideshowText.innerHTML = "Percussion"
    }    
    if(myIndex==3){
    slideshowText.innerHTML = "Strings"
    }    
    if(myIndex==4){
    slideshowText.innerHTML = "Woodwind"
    }    
    if(myIndex==5){
    slideshowText.innerHTML = "Brasswind"
    }    
    x[myIndex-1].style.display = "block";    
    
    
    setTimeout(slideShow, 3000);
}

/*initializing the variables*/
const keyboard = document.getElementById('keyboard');
const keyboardP = document.getElementById('keyboard-text');
const keyboardImg = document.getElementById('keyboard-img');

const percussion = document.getElementById('percussion');
const percussionP = document.getElementById('percussion-text');
const percussionImg = document.getElementById('percussion-img');

const strings = document.getElementById('strings');
const stringsP = document.getElementById('strings-text');
const stringsImg = document.getElementById('strings-img');

const woodwind = document.getElementById('woodwind');
const woodwindP = document.getElementById('woodwind-text');
const woodwindImg = document.getElementById('woodwind-img');

const brasswind = document.getElementById('brasswind');
const brasswindP = document.getElementById('brasswind-text');
const brasswindImg = document.getElementById('brasswind-img');

/*adding the event listeners to show content on mouseover and hide content on mouseout*/
/*keyboard*/
keyboard.addEventListener('mouseover', function(){
    keyboard.style.opacity = '1';
    keyboard.style.transform = 'translate(0,0)';
    keyboard.style.transition = '.7s';

    keyboardP.style.opacity = '1';
    keyboardP.style.transform = 'translate(0,0)';
    keyboardP.style.transition = '.7s';

    keyboardImg.style.opacity = '1';
    keyboardImg.style.transform = 'translate(0,0)';
    keyboardImg.style.transition = '.7s';


})
keyboard.addEventListener('mouseleave', function(){
    keyboard.style.opacity = '1';
    keyboard.style.transform = 'translateY(200%)';
    keyboard.style.transition = '.7s';

    keyboardP.style.opacity = '0';
    keyboardP.style.transform = 'translateY(200%)';
    keyboardP.style.transition = '.7s';

    keyboardImg.style.opacity = '0';
    keyboardImg.style.transform = 'translateX(-100%)';
    keyboardImg.style.transition = '.7s';

})

/*percussion*/
percussion.addEventListener('mouseover', function(){
    percussion.style.opacity = '1';
    percussion.style.transform = 'translate(0,0)';
    percussion.style.transition = '.7s';

    percussionP.style.opacity = '1';
    percussionP.style.transform = 'translate(0,0)';
    percussionP.style.transition = '.7s';

    percussionImg.style.opacity = '1';
    percussionImg.style.transform = 'translate(0,0)';
    percussionImg.style.transition = '.7s';
})

percussion.addEventListener('mouseleave', function(){
    percussion.style.opacity = '1';
    percussion.style.transform = 'translateY(200%)';
    percussion.style.transition = '.7s';

    percussionP.style.opacity = '0';
    percussionP.style.transform = 'translateY(200%)';
    percussionP.style.transition = '.7s';

    percussionImg.style.opacity = '0';
    percussionImg.style.transform = 'translateX(-100%)';
    percussionImg.style.transition = '.7s';

})

/*strings*/
strings.addEventListener('mouseover', function(){
    strings.style.opacity = '1';
    strings.style.transform = 'translate(0,0)';
    strings.style.transition = '.7s';

    stringsP.style.opacity = '1';
    stringsP.style.transform = 'translate(0,0)';
    stringsP.style.transition = '.7s';

    stringsImg.style.opacity = '1';
    stringsImg.style.transform = 'translate(0,0)';
    stringsImg.style.transition = '.7s';
})

strings.addEventListener('mouseleave', function(){
    strings.style.opacity = '1';
    strings.style.transform = 'translateY(200%)';
    strings.style.transition = '.7s';

    stringsP.style.opacity = '0';
    stringsP.style.transform = 'translateY(200%)';
    stringsP.style.transition = '.7s';

    stringsImg.style.opacity = '0';
    stringsImg.style.transform = 'translateX(-100%)';
    stringsImg.style.transition = '.7s';

})

/*woodwind*/
woodwind.addEventListener('mouseover', function(){
    woodwind.style.opacity = '1';
    woodwind.style.transform = 'translate(0,0)';
    woodwind.style.transition = '.7s';

    woodwindP.style.opacity = '1';
    woodwindP.style.transform = 'translate(0,0)';
    woodwindP.style.transition = '.7s';

    woodwindImg.style.opacity = '1';
    woodwindImg.style.transform = 'translate(0,0)';
    woodwindImg.style.transition = '.7s';
})

woodwind.addEventListener('mouseleave', function(){
    woodwind.style.opacity = '1';
    woodwind.style.transform = 'translateY(200%)';
    woodwind.style.transition = '.7s';

    woodwindP.style.opacity = '0';
    woodwindP.style.transform = 'translateY(200%)';
    woodwindP.style.transition = '.7s';

    woodwindImg.style.opacity = '0';
    woodwindImg.style.transform = 'translateX(-100%)';
    woodwindImg.style.transition = '.7s';

})

/*brasswind*/
brasswind.addEventListener('mouseover', function(){
    brasswind.style.opacity = '1';
    brasswind.style.transform = 'translate(0,0)';
    brasswind.style.transition = '.7s';

    brasswindP.style.opacity = '1';
    brasswindP.style.transform = 'translate(0,0)';
    brasswindP.style.transition = '.7s';

    brasswindImg.style.opacity = '1';
    brasswindImg.style.transform = 'translate(0,0)';
    brasswindImg.style.transition = '.7s';
})

brasswind.addEventListener('mouseleave', function(){
    brasswind.style.opacity = '1';
    brasswind.style.transform = 'translateY(200%)';
    brasswind.style.transition = '.7s';

    brasswindP.style.opacity = '0';
    brasswindP.style.transform = 'translateY(200%)';
    brasswindP.style.transition = '.7s';

    brasswindImg.style.opacity = '0';
    brasswindImg.style.transform = 'translateX(-100%)';
    brasswindImg.style.transition = '.7s';

})
