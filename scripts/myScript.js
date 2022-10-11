let menuIsOpen = false;

function swapMenuImage() {
  burgerImg = document.getElementById("burger-img");
  menuResponsive = document.getElementById("drop-menu-responsive");
  if (!menuIsOpen) {
    burgerImg.src = "icons/menuClose.png";
    menuResponsive.style.display = "block";
    menuIsOpen = true;
  } else {
    burgerImg.src = "icons/menu.png";
    menuResponsive.style.display = "none";
    menuIsOpen = false;
  }
  return false;
}
