var link = document.getElementById("back-to-top");
var amountScrolled = 250;

window.addEventListener('scroll', function(e) {
    if ( window.pageYOffset > amountScrolled ) {
        link.classList.add('show');
    } else {
        link.className = 'back-to-top';
    }
});  
// <!-- Scrolls to Top -->
link.addEventListener('click', function(e) {
    e.preventDefault();

    var distance = 0 - window.pageYOffset;
    var increments = distance/(5/16);
    function animateScroll() {
        window.scrollBy(16, increments);
        if (window.pageYOffset <= document.body.offsetTop) {
            clearInterval(runAnimation);
        }
    };
    // Loop the animation function
    var runAnimation = setInterval(animateScroll, 16);
});