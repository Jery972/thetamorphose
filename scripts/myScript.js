let menuToggle = false;
let menuThetaToggle = false;

document.onclick = function (e) {
  burgerImg = document.getElementById("burger-img");
  menuResponsive = document.getElementById("nav-links");
  menuTheta = document.getElementById("nav-thetahealing");
  if (
    menuToggle &&
    e.target.id !== "burger-img" &&
    e.target.id !== "a-burger-img" &&
    e.target.id !== "nav-links"
  ) {
    burgerImg.src = "images/icons/menu.png";
    menuResponsive.style.display = "none";
    menuToggle = false;
  }
  if (menuThetaToggle && e.target.id !== "link-nav-theta") {
    menuTheta.style.display = "none";
    menuThetaToggle = false;
  }
};

function swapMenuImage() {
  burgerImg = document.getElementById("burger-img");
  menuResponsive = document.getElementById("nav-links");
  if (menuToggle) {
    burgerImg.src = "images/icons/menu.png";
    menuResponsive.style.display = "none";
    menuToggle = false;
  } else {
    burgerImg.src = "images/icons/menuClose.png";
    menuResponsive.style.display = "flex";
    menuToggle = true;
  }
  return false;
}

function openMenuTheta() {
  menuTheta = document.getElementById("nav-thetahealing");
  if (menuThetaToggle) {
    menuTheta.style.display = "none";
    menuThetaToggle = false;
  } else {
    menuTheta.style.display = "block";
    menuThetaToggle = true;
  }
  return false;
}

//TEMOIGNAGES ACCORDION
var acc = document.getElementsByClassName("open-hide-button");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-button-hide");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
