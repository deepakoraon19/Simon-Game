let arr = [];
const btn = document.querySelectorAll(".btn");

let random = Math.floor(Math.random() * (4 - 0) + 0);
let output = [];
let glow;
let game = false;
let heading = document.querySelector("#level-title");
let rules = document.querySelector("p");

function glowButton(glow) {
  console.log("jalao");
  btn[glow].classList.add("glow");
  setTimeout(() => {
    btn[glow].classList.remove("glow");
  }, 1000);
}

function newGlow() {
  arr.push(Math.floor(Math.random() * (4 - 0) + 0));
  glow = arr[arr.length - 1];
  glowButton(glow);
  output = [];
}

document.addEventListener("keypress", (e) => {
  if ((e.code = "Space")) {
    arr = [];
    output = [];
    game = true;
    // run()
    heading.innerHTML = "Restarted";
    heading.style.animationName = "example";
    heading.style.animationDuration = "3s";

    setTimeout(() => {
      heading.innerHTML = "Press Any Key to Start";
      heading.style.animationName = "";
      heading.style.animationDuration = "";
    }, 700);
  }
});

let run = () => {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      if (arr.length == 0) {
        arr.push(i);
        arr.push(Math.floor(Math.random() * (4 - 0) + 0));
        glow = arr[arr.length - 1];
        glowButton(glow);
        game = true;
      } else if (arr.length >= output.length) {
        output.push(i);
        console.log(arr, output);

        for (let j = 0; j < output.length; j++) {
          if (arr[j] != output[j]) {
            console.log("galat" + arr[j], output[j]);
            game = false;
            heading.innerHTML = "You Lost Press SPACE to restart";
          }
        }
        if (game == true && arr.length == output.length) {
          console.log("naya jalao");
          heading.innerHTML = `Score : ${arr.length}`;
          setTimeout(newGlow(), 2000);
        }
        // console.log("out");
      }
      // console.log(arr);
      //console.log(Math.floor(Math.random()*(4-0))+0);
    });
  }
};

run();
