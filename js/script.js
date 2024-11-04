const card = document.getElementById("flipCardInner");
const lid = document.getElementById("lid");
const letter = document.getElementById("letter");
const envelopeFront = document.getElementById("envelopeFront");

setTimeout(() => {
  setTimeout(() => {
    card.style.transform = "rotateY(180deg)";
  }, 1500);
}, 1000);

setTimeout(() => {
  setTimeout(openEnvelope, 1000);
}, 2000);

// Lid Open
function openEnvelope() {
  setInterval(() => {
    lid.style.transform = "rotateX(-180deg)";
  }, 500);

  setTimeout(letterUp, 2000);
}

// Letter Up
function letterUp() {
  lid.style.zIndex = 2;
  envelopeFront.style.zIndex = 3;
  letter.style.zIndex = 2;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 500) {
      clearInterval(id);
    } else {
      letter.style.top = -i + "px";
      i++;
    }
  }, 5);

  setTimeout(letterDown, 3000);
}

// Letter Down
function letterDown() {
  letter.style.top = -500 + "px";
  lid.style.zIndex = 2;
  envelopeFront.style.zIndex = 2;
  letter.style.zIndex = 3;

  let i = 0;
  let id = null;
  clearInterval(id);

  id = setInterval(() => {
    if (i == 100) {
      // lastPos = -i;
      clearInterval(id);

      card.style.transform = "rotateY(180deg) scale(0.8) translateX(200px)";

      var position = 0;
      var target = 300; // target position in pixels
      var step = 2; // pixels to move per interval

      id1 = setInterval(() => {
        if (position >= target) {
          clearInterval(id1);
        } else {
          position += step;
          letter.style.transform = `translateX(${position}px)`;
        }
      }, 5);

      //lid.style.transform = "translateX(-100px)";
      //envelopeFront.style.transform = "translateX(-100px)";
    } else {
      letter.style.top = -500 + i * 5 + "px";
      i++;
    }
  }, 10);
}
