const cover = document.getElementById('cover');
const topNav = document.getElementById('top-nav');

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open');



window.onscroll = ()=>{
    var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var opacity = 1 - (window.pageYOffset / maxScroll);
    cover.style.opacity = opacity >= 0 ? opacity : 0;   
}
  
  window.onscroll = ()=> {
    var maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var opacity = 1 - (window.pageYOffset / maxScroll);
    if (window.pageYOffset > 510) {
      topNav.style.opacity = 1;
    } else {
      topNav.style.opacity = opacity >= 0 ? opacity : 0;
    }
}



