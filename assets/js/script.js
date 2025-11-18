window.onscroll = function () {
  scrollFunction();
};

let mybutton = document.getElementById("scrollTop");

function scrollFunction() {
  if (
    document.body.scrollTop > 640 ||
    document.documentElement.scrollTop > 640
  ) {
    mybutton.style.display = "block";
    mybutton.style.position = "fixed";
    mybutton.style.bottom = "20px";
    mybutton.style.right = "10px";
    mybutton.style.transition = "0.3s ease-in-out";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.querySelector(".toggleChevron").addEventListener("click", function () {
  var contactMenu = document.querySelector(".contactMenu");

  // Toggle the display of the contact menu
  if (
    contactMenu.style.display === "none" ||
    contactMenu.style.display === ""
  ) {
    contactMenu.style.display = "flex"; // Show the list
  } else {
    contactMenu.style.display = "none"; // Hide the list
  }
});

const images = [
  "./assets/images/slider-1-2.jpg",
  "./assets/images/slider-1-3.jpg",
  "./assets/images/slider-1-1.jpg",
];

let currentIndex = 0;

function changeBackground() {
  const backgroundImage = document.getElementById("dynamicBackground");
  currentIndex = (currentIndex + 1) % images.length;
  backgroundImage.src = images[currentIndex];
}
setInterval(changeBackground, 1000);
