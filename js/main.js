// copyright year
var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var where = document.getElementById('jewelery');
 where.innerHTML = '<a href=" http://jewelery.aidenjewelshub.com.ng/" target="_blank"><button class="btn btn-outline-success text-light banner-btn"> Check it out </button> </a>';

var where = document.getElementById('crypto');
 where.innerHTML = '<a href="http://crypto.aidenjewelshub.com.ng/" target="_blank"><button class="btn btn-outline-success text-light banner-btn"> Check it out </button> </a>';

var where = document.getElementById('courier');
 where.innerHTML = '<a href="http://courier.aidenjewelshub.com.ng/" target="_blank"><button class="btn btn-outline-success text-light banner-btn"> Check it out </button> </a>';

var where = document.getElementById('leave');
 where.innerHTML = '<a href="http://leavesystem.aidenjewelshub.com.ng/" target="_blank"><button class="btn btn-outline-success text-light banner-btn"> Check it out </button> </a>';

