// Get the button:
const toTop = document.querySelector(".to-top");
const footer = document.querySelector(".footer-container");

// When the user scrolls down 200px from the top of the document, show the button
window.addEventListener("scroll", () => {

  if(window.pageYOffset > 200){
    toTop.classList.add("active");
  }

  else{
    toTop.classList.remove("active");
  }


  //hides the button when it reaches the footer
  const distanceToFooter = footer.getBoundingClientRect().top - window.innerHeight;
  //console.log(distanceToFooter);
  if (distanceToFooter < toTop.offsetHeight) {
    toTop.classList.remove("active");
  }
 
});

