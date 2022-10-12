let menuToggle = false;

document.onclick = function (e) {
  if (
    menuToggle &&
    e.target.id !== "burger-img" &&
    e.target.id !== "a-burger-img" &&
    e.target.id !== "nav-links"
  ) {
    burgerImg.src = "icons/menu.png";
    menuResponsive.style.display = "none";
    menuToggle = false;
  }
};

function swapMenuImage() {
  burgerImg = document.getElementById("burger-img");
  menuResponsive = document.getElementById("drop-menu-responsive");
  if (!menuToggle) {
    burgerImg.src = "icons/menuClose.png";
    menuResponsive.style.display = "block";
    menuToggle = true;
  } else {
    burgerImg.src = "icons/menu.png";
    menuResponsive.style.display = "none";
    menuToggle = false;
  }
  return false;
}
