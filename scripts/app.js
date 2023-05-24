var color;
const $ = (e) => document.querySelector(e);
let score = $(".btn.score b");
let err = $(".btn.err b");
let boxes = document.querySelectorAll(".boxes .box");
boxes[rdm(14)].classList += " active";

changeColor();

// Random number
function rdm(max) {
  return Math.round(Math.random() * max) + 1;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let boxclass = box.attributes.class.value;
    if (boxclass.search("active") > -1) {
      // Make a noise // right
      new Audio("sounds/score.mp3").play();

      // Add scores
      score.innerHTML = Number(score.innerHTML) + 1;
      console.log(score);

      // change active boxe
      document.querySelector(".boxes .active").classList = "box";
      boxes[rdm(14)].classList += " active";

      changeColor();

      // score for levelup // sf
      // border radius // br
      function levelup(sfl, br) {
        score.innerHTML == sfl &&
          boxes.forEach((box) => {
            box.style.borderRadius = br;
          });
      }

      let levelup_sf = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
      let levelup_br = [
        "50% 0 0 0",
        "0 50% 0 0",
        "0 0 50% 0",
        "0 0 0 50%",
        "50% 50% 0 0",
        "0 50% 50% 0",
        "0 0 50% 50%",
        "50% 0 50% 0",
        "0 50% 0 50%",
        "0 50% 50% 50%",
        "50% 50% 50% 0",
        "0 50% 50% 50%",
        "50%",
      ];

      for (let i = 0; i < levelup_sf.length; i++) {
        levelup(levelup_sf[i], levelup_br[i]);
      }
    } else {
      // Make a noise // wrong
      new Audio("sounds/wrong.mp3").play();

      // Add errs
      err.innerHTML = Number(err.innerHTML) + 1;

      if (score / err.innerHTML <= 3) {
        console.log("It's wrong!");
      }
    }
  });
});

// change the color//boxes
function changeColor() {
  let [red, green, blue] = [rdm(100), rdm(100), rdm(100)];

  for (x in boxes) {
    if (boxes[x].style != undefined)
      boxes[x].style.background = "rgb(" + red + " " + green + " " + blue + ")";
  }
}
