document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


// scripts.js
let currentIndex = 0;

function moveSlide(step) {
    const carouselInner = document.querySelector('.carousel-inner');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    currentIndex = (currentIndex + step + totalCards) % totalCards;
    const offset = -currentIndex * (cards[0].clientWidth + 20); // 20px margin

    carouselInner.style.transform = `translateX(${offset}px)`;
}

$(document).ready(function() {
    $(".wish-icon i").click(function() {
        $(this).toggleClass("fa-heart fa-heart-o");
    });
});