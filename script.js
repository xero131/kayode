const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

function myMenuFunction() {
    var navMenu = document.getElementById("navMenu");
    if (navMenu.className === "nav_menu") {
        navMenu.className += " responsive";
    } else {
        navMenu.className = "nav_menu";
    }
}

function menuClose() {
    var navMenu = document.getElementById("navMenu");
    navMenu.className = "nav_menu";
}

var modals = document.querySelectorAll(".modal");
var btn = document.querySelectorAll("a.link");
var closeBtn = document.getElementsByClassName("close");
const mediaQuery = window.matchMedia("(max-width: 1084px)");

function handleMediaQueryChange(event) {
    if (event.matches) {
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function (e) {
                e.preventDefault();
                var modal = document.querySelector(e.target.getAttribute("href"));
                modal.style.display = "block";
            };
        }
        for (var i = 0; i < closeBtn.length; i++) {
            closeBtn[i].onclick = function () {
                for (var index in modals) {
                    if (typeof modals[index].style !== "undefined") {
                        modals[index].style.display = "none";
                    }
                }
            };
        }
        window.onclick = function (event) {
            if (event.target.classList.contains("modal")) {
                for (var index in modals) {
                    if (typeof modals[index].style !== "undefined") {
                        modals[index].style.display = "none";
                    }
                }
            }
        };
    } else {
        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function (e) {
                e.preventDefault();
                var modal = document.querySelector(e.target.getAttribute("href"));
                modal.style.display = "none";
            };
        }
    }
}

handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);
const navLink = document.querySelectorAll(".link");
function linkAction() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.remove("responsive");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("fade");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
