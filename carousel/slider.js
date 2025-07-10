const images = [
    {
        src: '../photos/London.avif',
        info: 'London is the capital of the United Kingdom'
    },
    {
        src: '../photos/New-York.avif',
        info: 'New York is a famous city in USA'
    },
    {
        src: '../photos/Parij.avif',
        info: 'Paris is the capital of France'
    },
    {
        src: '../photos/Seoul.avif',
        info: 'Seoul is the capital of South Korea'
    },
    {
        src: '../photos/Tokio.avif',
        info: 'Tokyo is the capital of Japan'
    },
    {
        src: '../photos/Rio-de-janeiro.avif',
        info: 'Rio de Janeiro is a famous city in Brazil'
    },
    {
        src: '../photos/Moscow.avif',
        info: 'Moscow is the capital of Russia'
    },
    {
        src: '../photos/Mecca.avif',
        info: 'Mecca is a holy Islamic city in Saudi Arabia'
    },
    {
        src: '../photos/Egypt.avif',
        info: 'Cairo is the capital of Egypt'
    }
];

let current = 0;

const prevButton = document.getElementById('prev');
const slide = document.getElementById('slide');
const nextButton = document.getElementById('next');
const info = document.getElementById('info');

const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');

const info1 = document.getElementById('info_1');
const info2 = document.getElementById('info_2');
const info3 = document.getElementById('info_3');

function showSlide(index) {
    slide1.src = images[index % images.length].src;
    info1.textContent = images[index % images.length].info;

    slide2.src = images[(index + 1) % images.length].src;
    info2.textContent = images[(index + 1) % images.length].info;

    slide3.src = images[(index + 2) % images.length].src;
    info3.textContent = images[(index + 2) % images.length].info;

    current = index;
}

prevButton.addEventListener('click', function() {
    const randomIndex = (current - 3 + images.length) % images.length;
    showSlide(randomIndex)
})

nextButton.addEventListener('click', function() {
    const randomIndex = (current + 3) % images.length;
    showSlide(randomIndex)
})

window.addEventListener('load', function () {
    showSlide(current);
});
