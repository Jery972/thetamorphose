function swapMenuImage() {
  let img = document.getElementById("myImg").src;
  console.log(img);
  if (img == "/icons/menu.png") {
    console.log("icii");
    document.getElementById("myImg").src = "/icons/menuClose.png";
  }
  return false;
}
