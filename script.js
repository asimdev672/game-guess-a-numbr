"use strict";

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

console.log("secretNumber is ====", secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guesss = Number(document.querySelector(".guess").value);

  //   when player is win

  if (guesss === secretNumber) {
    document.querySelector(".message").textContent = " correct number";

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".heighScore").textContent = score;

    setTimeout(() => {
        alert('if you wanna play again then click top left again button 🙂')
    }, 1000);

    document.querySelector(".again").addEventListener("click", () => {

      location.reload();
    });

  } else if (guesss !== secretNumber) {
    if (score > 1) {

      document.querySelector(".message").textContent =
        guesss > secretNumber
          ? "number is to heigh...😲"
          : " number is to low...";

      score--;

      document.querySelector(".score").textContent = score;

    } else
      document.querySelector(".message").textContent = "you lost this game....";

  }
  
  document.querySelector("body").style.backgroundColor = "222";
  document.querySelector(".guess").value = "";
});
//   when guess numbr is heigh
//    else if (guesss > secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent =
//         "number is to heigh...😲";

//       score--;

//       document.querySelector(".score").textContent = score;
//     } else
//       document.querySelector(".message").textContent = "you lost this game....";
//   }

//   //   when guess numbr is heigh
//   else if (guesss < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "number is to low...";

//       score--;

//       document.querySelector(".score").textContent = score;
//     } else
//       document.querySelector(".message").textContent = "you lost this game....";
//   } else {
//     document.querySelector(".message").textContent = "wrong number !";

//     document.querySelector("body").style.backgroundColor = "#222";
//   }

//   document.querySelector(".guess").value = "";
// });
