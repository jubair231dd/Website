var Image = [
  "assets/images/IMG_1.jpg",
  "assets/images/IMG_4.jpg",
  "assets/images/IMG_3.jpg",
  "assets/images/IMG_5.jpg",
  "assets/images/IMG_6.jpg",
  "assets/images/IMG_8.jpg",
];

var myImage = document.getElementById("myImage");
var count_index = 0;

function fadeIn() {
  var opacity = 0.5;
  myImage.style.opacity = opacity;

  var fadeInInterval = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    } else {
      opacity += 0.01;
      myImage.style.opacity = opacity;
    }
  }, 10); // Adjust the interval time for a smoother fade effect
}

function fadeOut() {
  var opacity = 1;

  var fadeOutInterval = setInterval(function () {
    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      myImage.src = Image[count_index];
      fadeIn();
      count_index++;
      if (count_index >= Image.length) {
        count_index = 0;
      }
    } else {
      opacity -= 0.05;
      myImage.style.opacity = opacity;
    }
  }, 10); // Adjust the interval time for a smoother fade effect
}

function image_change() {
  fadeOut();
  setTimeout(image_change, 5000);
}

window.onload = image_change();

//copyright year
const currentYear = new Date().getFullYear();
console.log(currentYear);
var copyright_year = document.getElementById("copyright_year");

copyright_year.textContent = currentYear;


