var sidenav = document.querySelector(".side-navbar")
function shownav(){
  sidenav.style.left = "0";
}


function closenav() {
    
      sidenav.style.left = "-60%";
}




var container = document.querySelector(".products")
var element = container.querySelectorAll("p")

var enteredinput = "";


function fnc(event) {
  
  enteredinput = event.target.value.toUpperCase()
  for (var i = 0; i < element.length; i++){
    if (element[i].textContent.toUpperCase().indexOf(enteredinput) < 0) {
      element[i].parentElement.style.display = "none";
    } else {
      element[i].parentElement.style.display = "block";
    }
  }
}