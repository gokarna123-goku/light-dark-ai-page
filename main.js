//

function toggleMode() {
  var body = document.querySelector("body");
  var toggleIcon = document.querySelector("#toggle-icon");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleIcon.style.backgroundImage = "url('./img/moon.png')";
    toggleIcon.style.transition = "0.3s ease-out";
  } else {
    toggleIcon.style.backgroundImage = "url('./img/sun.png')";
    toggleIcon.style.transition = "0.3s ease-out";
  }
}

// END
