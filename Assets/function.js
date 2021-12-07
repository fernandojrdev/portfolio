/*NavBar*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
/*navBar*/
/*Slider*/
const gra = function(min, max) {
  return Math.random() * (max - min) + min;
};
const init = function() {
  let items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    items[i].style.minHeight = gra(120, 205) + "vh";
    items[i].style.background = randomColor({ luminosity: "light" });
  }
};
init();