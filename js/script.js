//  +++++++++++++++++++++
// +VARIABLE DECLERATION+
// ++++++++++++++++++++++

let burgerMode = document.querySelector(".navi__burger-menu")
let hamburger = document.getElementById('hamburger');
let burgerLine = document.querySelector('.burger-line');



let burgerContainer = document.getElementById("nav__burger-menu")
let navBurgerLinks =  document.querySelectorAll(".nav__burger-links")
let navBurgerSubLinks = document.querySelectorAll(".sub-link")



let naviComponent = document.querySelector(".navi__right-container")
let navSearch = document.getElementById("nav-search-show")
let navSearchContainer = document.querySelector(".nav-search-container")
let modalClose = document.querySelector(".nav-close")


// +++++++++++++++++++++++++++++
// +EVENT LISTENERS DECLARATION+
// +++++++++++++++++++++++++++++
modalClose.addEventListener("click", closeModal)
navSearch.addEventListener("click", switchVisible)
// navBurgerLinks.addEventListener("click", toggleNavSubLinks)
// hamburger.addEventListener("click", burgerMenu)



// +++++++++++
// +FUNCTIONS+
// +++++++++++

// ENABLES SEARCH MODAL
function switchVisible() {
    console.log("test")
    naviComponent.style.zIndex = "-1"
    navSearchContainer.style.visibility = 'visible';
    hamburger.style.visibility = 'hidden';
}

// DISABLE SEARCH MODAL
function closeModal() {
    naviComponent.style.zIndex = "1"
    navSearchContainer.style.visibility = 'hidden';
    hamburger.style.visibility = 'visible';
    hamburger.classList.remove("open");
}

// BURGER MENU
hamburger.addEventListener('click', function() {
    this.classList.toggle('open');
    burgerContainer.classList.toggle('add-height');
    subBurgerMenu()
});

function subBurgerMenu() {
    for (let i = 0; i < navBurgerLinks.length; i++) {
        navBurgerLinks[i].addEventListener("click", toggleBurgerMenu)
    }
}

// Expands selected UL from burger menu (took 3 hours to fix!!!)
function toggleBurgerMenu() {
    this.querySelector("div").classList.toggle("add-sub-height")
}



