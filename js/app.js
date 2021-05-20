const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

const tabs = document.querySelectorAll('.io');
const hiddenText = document.querySelectorAll('.hidden-subtext');

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    if (hiddenText[index].style.display == "none") {
      tab.innerHTML = "&#8593;";
      hiddenText[index].style.display = "block";
    } else {
      hiddenText[index].style.display = "none";
      tab.innerHTML = "&#8595;";
  }});
});

// modal

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");


for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
});

span.onclick = function() {
  modal.style.display = "none";
}


