// for show side nav



var snav = document.querySelector(".side-navbar")

function shownav() {
  snav.style.left = "0"

}


function closenav() {
  snav.style.left = "-60%"
}

function closepop() {
  document.querySelector(".add").style.display = "none";
}


document.addEventListener("DOMContentLoaded", function () {




  /* for slider */
  const btnLeft = document.querySelector(".btnlf");
  const btnRight = document.querySelector(".btnrt");
  const images = document.querySelectorAll(".hero-image");

  let currentIndex = 0;

  function showImage(index) {
    images[currentIndex].classList.remove("active");
    currentIndex = index;
    images[currentIndex].classList.add("active");
  }

  btnRight.addEventListener("click", function()  {
    let nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  });

  btnLeft.addEventListener("click", function() {
    let prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  });

});
/*search function for collections */


  // Search Functionality
  var container = document.querySelector("#product");
  var elements = container.querySelectorAll("p");


enteredInput = "";
  // Function to handle search input
  function fnc(event) {
    var enteredInput = event.target.value.toUpperCase();
    for (var i = 0; i<elements.length; i++) {
      if (elements[i].textContent.toUpperCase().indexOf(enteredInput) < 0) {
        elements[i].parentElement.style.display = "none";
      } else {
        elements[i].parentElement.style.display = "block";
      }
    }
  }




//for filter


 const checkboxes = document.querySelectorAll(".filter-checkbox");
 checkboxes.forEach((cb) => cb.addEventListener("change", applyFilters));

 function fnc() {
   applyFilters();
 }

 function applyFilters() {
   const searchText = document.getElementById("search").value.toUpperCase();
   const products = document.querySelectorAll(".products-box");

   let selected = {
     occasion: [],
     color: [],
     type: [],
   };

   checkboxes.forEach((cb) => {
     if (cb.checked) {
       selected[cb.dataset.filter].push(cb.value);
     }
   });

   products.forEach((product) => {
     const name = product.querySelector("p").textContent.toUpperCase();
     const occasion = product.dataset.occasion;
     const color = product.dataset.color;
     const type = product.dataset.type;

     const matchSearch = name.includes(searchText);
     const matchOccasion =
       selected.occasion.length === 0 || selected.occasion.includes(occasion);
     const matchColor =
       selected.color.length === 0 || selected.color.includes(color);
     const matchType =
       selected.type.length === 0 || selected.type.includes(type);

     if (matchSearch && matchOccasion && matchColor && matchType) {
       product.style.display = "block";
     } else {
       product.style.display = "none";
     }
   });
 }