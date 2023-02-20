const homeLink = document.querySelector('#home-link');
const aboutLink = document.querySelector('#about-link');
const homeSection = document.querySelector('div.home');
const aboutSection = document.querySelector('div.about')

homeLink.addEventListener('click', () => {
    loadHome();
});

function loadHome() {
    homeSection.removeAttribute('hidden');
    aboutSection.setAttribute('hidden', '');
}

aboutLink.addEventListener('click', () => {
    loadAbout();
});

function loadAbout() {
    aboutSection.removeAttribute('hidden');
    homeSection.setAttribute('hidden', '');
}