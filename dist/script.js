// grab everything we need
const btn = document.querySelector(".mobile-menu-button");
const sidebar = document.querySelector(".sidebar")

// add event listener for the click
btn.addEventListener( "click" , () => {
    sidebar.classList.toggle("-translate-x-full")
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
};

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn2')) {
  var myDropdown = document.getElementById("myDropdown2");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn3')) {
  var myDropdown = document.getElementById("myDropdown3");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn4')) {
  var myDropdown = document.getElementById("myDropdown4");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}