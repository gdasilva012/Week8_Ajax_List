//greeting
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning.";
} else if (time < 20) {
  greeting = "Good afternoon.";
} else {
  greeting = "Good evening.";
}
document.getElementById("demo").innerHTML = greeting;

//show or hide
function showHide() {
    let x = document.getElementById("div4");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

//Event listener to enlarge photo
let img = document.getElementById("forage");
img.addEventListener('click', function () {
  if (img.height != 200) {
      img.height = 200;
  } else {
      img.height = -1;
  }
});

//Another button
const button = document.getElementById("buttons");
button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}