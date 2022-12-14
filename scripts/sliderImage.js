const items = document.querySelectorAll(".slideIMG");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
let count = 0;
let encour = false;

let timer = setTimeout(() => {
  showNextItem();
}, 8000);
let fadeTimer;

function showNextItem() {
  if (!encour) {
    encour = true;
    items[count].classList.add("leaving");
    items[count].classList.remove("active");
    clearTimeout(fadeTimer);

    fadeTimer = setTimeout(() => {
      items[count].classList.remove("leaving");
      if (count < itemCount - 1) {
        count++;
      } else {
        count = 0;
      }

      items[count].classList.add("active");
      encour = false;
      clearTimeout(timer);
      timer = setTimeout(() => {
        showNextItem();
      }, 8000);
    }, 1400);
  }
}

function showPreviousItem() {
  if (!encour) {
    encour = true;
    items[count].classList.add("leaving");
    items[count].classList.remove("active");
    clearTimeout(fadeTimer);

    fadeTimer = setTimeout(() => {
      items[count].classList.remove("leaving");
      if (count > 0) {
        count--;
      } else {
        count = itemCount - 1;
      }

      items[count].classList.add("active");
      encour = false;
      clearTimeout(timer);
      timer = setTimeout(() => {
        showPreviousItem();
      }, 8000);
    }, 1400);
  }
}

function keyPress(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
}

nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);
document.addEventListener("keydown", keyPress);
