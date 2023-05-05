// = = = = side-navbar = = = =

var navBar = document.getElementById('s-bar');
var navToggle = document.getElementById('toggle');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open')
    navBar.classList.toggle('open')
});

// = = = = side-navbar = = = =