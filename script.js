var buttonE1 = document.querySelector("#letsStart");
var letsStartE1 = document.querySelector("#letsStart");

buttonE1.addEventListener("click", function () {
  var listItemE1 = document.createElement("li");
  listItemE1.className = "letsStart";
  listItemE1.textContent =
    "this is where text would go if I wanted text after clicking";
  letsStartE1.appendChild(listItemE1);
});
