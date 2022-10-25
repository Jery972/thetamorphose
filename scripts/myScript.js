let menuToggle = false;
let menuThetaToggle = false;
let menuMeditaToggle = false;

document.onclick = function (e) {
  burgerImg = document.getElementById("burger-img");
  menuResponsive = document.getElementById("nav-links");
  menuTheta = document.getElementById("nav-thetahealing");
  menuMedita = document.getElementById("nav-meditation");
  if (
    menuToggle &&
    e.target.id !== "burger-img" &&
    e.target.id !== "a-burger-img" &&
    e.target.id !== "nav-links" &&
    e.target.id !== "link-nav-medita" &&
    e.target.id !== "link-nav-theta"
  ) {
    burgerImg.src = "images/icons/menu.png";
    menuResponsive.style.display = "none";
    menuToggle = false;
  }
  if (menuThetaToggle && e.target.id !== "link-nav-theta") {
    menuTheta.style.display = "none";
    menuThetaToggle = false;
  }
  if (menuMeditaToggle && e.target.id !== "link-nav-medita") {
    menuMedita.style.display = "none";
    menuMeditaToggle = false;
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
function openMenuMedita() {
  menuMedita = document.getElementById("nav-meditation");
  if (menuMeditaToggle) {
    menuMedita.style.display = "none";
    menuMeditaToggle = false;
  } else {
    menuMedita.style.display = "block";
    menuMeditaToggle = true;
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

//VIDEOS ACCORDION
var acc = document.getElementsByClassName("acordion-video");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-video");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//SUBMIT FORM CONTACT

function submitContact() {
  const form = document.getElementById("form-contact");
  const inputs = document.getElementById("form-contact").elements;
  if (!form.reportValidity()) {
    return false;
  }
  if (!inputs["Numero"].value.trim() && !inputs["Mail"].value.trim()) {
    return alert(
      "Veuillez remplir un téléphone ou une adresse pour pouvoir vous recontacter"
    );
  }
  form.submit();
}
