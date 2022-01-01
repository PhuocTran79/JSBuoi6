function changeBG() {
  var theDiv = document.getElementsByTagName("div");
  for (var i = 0; (i < theDiv.length); i++) {
    if ((i + 1) % 2 == 0) {
      theDiv[i].style.background = "red";
    } else {
      theDiv[i].style.background = "blue";
    }
  }
}


