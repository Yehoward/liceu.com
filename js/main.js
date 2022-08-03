function toggleNavbar () {
  var x = document.getElementById("navbar");
  if (x.className === "navbar row") {
    x.className += " extended";

  } else {
    x.className = "navbar row";
  }
}
