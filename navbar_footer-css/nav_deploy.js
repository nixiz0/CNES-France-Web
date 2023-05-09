/* Navbar Deploy */
let navBtnOn = document.getElementById('toggle-navbar');
let navBtnOff = document.getElementById('remove-navbar');
let navbar = document.querySelector('.nav_extend_none');

function toggleNavbar() {
    if (navbar.classList.contains('nav_extend_none')) {
        navbar.classList.toggle('nav_extend_show');
    }
    navbar.classList.toggle('nav_extend_none');
  }
  
navBtnOn.addEventListener('click', toggleNavbar);
navBtnOff.addEventListener('click', toggleNavbar);


/* Footer Deploy Links */
var texteDeployable = document.getElementById("texte-deployable");
var texteClic = document.querySelector(".texte-clic");

function toggleText() {
  var hiddenText = document.getElementById("hiddenText");
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
  } else {
    hiddenText.style.display = "none";
  }
}