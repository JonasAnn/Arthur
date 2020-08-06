// Get the navbar
let navbar = document.querySelector(".navbar");
console.log(navbar);
// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove the sticky class when you leave the scroll position.
function myFunction() {
  if (window.pageYOffset  >= sticky) {
    let navLogo = document.querySelector(".navbar__item--logo");
    console.log("The nav i smoving");
    // console.log(navbar.offsetTop);
     navLogo.style.visibility = "visible";
    
  } else {
    // navLogo.style.visibility = "hidden";
  }
}
myFunction();
