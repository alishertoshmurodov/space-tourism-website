/* -------------------------- */
/* destination page variables */
/* -------------------------- */

const destinationToggleEl = document.querySelectorAll('.destination-container__list-item');
const planetImg = document.querySelector('.destination-container__planet-image img');
const planetName = document.querySelector('.destination-container__planet-info h2');
const planetInfo = document.querySelector('.destination-info');
const planetDistance = document.querySelector('.destination-container__distance p:last-child');
const planetTravelTime = document.querySelector('.destination-container__travel-time p:last-child');
const planetInfoContainer = document.querySelector('.planet-info-container');

/* -------------------- */
/* crews page variables */
/* -------------------- */

const crewToggleEl = document.querySelectorAll('.crew-toggle-item');
const crewMemberImg = document.querySelector('.crew-container__img img');
const crewMemberRole = document.querySelector('.crew-container__info h4');
const crewMemberName = document.querySelector('.crew-container__info h3');
const crewMemberBio = document.querySelector('.crew-container__info p');
const crewContainer = document.querySelector('.crew-container__info article');


/* --------------------- */
/* technology page const */
/* --------------------- */

const techToggleEls = document.querySelectorAll('.technology-container__toggle-item');
const techHeadingEl = document.querySelector('.technology-container__item h3');
const techTextEl = document.querySelector('.technology-container__item p');
const techImgEl = document.querySelector('.technology-container__img img');
const techContentEl = document.querySelector('.technology-container__item article');


/* ---------------------- */
/* getting data from json */
/* ---------------------- */

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {

        destinationToggleEl.forEach(element => {
            element.addEventListener('click', function (e) {
                planetImg.removeAttribute('class');
                void planetImg.offsetWidth;
                planetImg.setAttribute('class', 'fade-in-bottom');
                planetInfoContainer.classList.remove('fade-in');
                void planetInfoContainer.offsetWidth;
                planetInfoContainer.classList.add('fade-in');
                for (let i = 0; i < destinationToggleEl.length; i++) {
                    destinationToggleEl[i].classList.remove('active-toggle-bar');
                }
                element.classList.add('active-toggle-bar');
                if (element.getAttribute('value') === 'moon') {
                    planetImg.src = json.destinations[0].images.webp;
                    planetImg.setAttribute('alt', 'Moon');
                    planetName.innerHTML = json.destinations[0].name.toUpperCase();
                    planetInfo.innerHTML = json.destinations[0].description;
                    planetDistance.innerHTML = json.destinations[0].distance.toUpperCase();
                    planetTravelTime.innerHTML = json.destinations[0].travel.toUpperCase();
                } else if (element.getAttribute('value') === 'mars') {
                    planetImg.src = json.destinations[1].images.webp;
                    planetImg.setAttribute('alt', 'Mars');
                    planetName.innerHTML = json.destinations[1].name.toUpperCase();
                    planetInfo.innerHTML = json.destinations[1].description;
                    planetDistance.innerHTML = json.destinations[1].distance.toUpperCase();
                    planetTravelTime.innerHTML = json.destinations[1].travel.toUpperCase();
                } else if (element.getAttribute('value') === 'europa') {
                    planetImg.src = json.destinations[2].images.webp;
                    planetImg.setAttribute('alt', 'Europa');
                    planetName.innerHTML = json.destinations[2].name.toUpperCase();
                    planetInfo.innerHTML = json.destinations[2].description;
                    planetDistance.innerHTML = json.destinations[2].distance.toUpperCase();
                    planetTravelTime.innerHTML = json.destinations[2].travel.toUpperCase();
                } else if (element.getAttribute('value') === 'titan') {
                    planetImg.src = json.destinations[3].images.webp;
                    planetImg.setAttribute('alt', 'Moon');
                    planetName.innerHTML = json.destinations[3].name.toUpperCase();
                    planetInfo.innerHTML = json.destinations[3].description;
                    planetDistance.innerHTML = json.destinations[3].distance.toUpperCase();
                    planetTravelTime.innerHTML = json.destinations[3].travel.toUpperCase();
                }
            });
        });
        crewToggleEl.forEach(element => {
            element.addEventListener('click', function (e) {
                for (let i = 0; i < crewToggleEl.length; i++) {
                    crewToggleEl[i].classList.remove('active-crew-toggle')
                }
                crewContainer.classList.remove('fade-in')
                crewContainer.offsetWidth;
                crewContainer.classList.add('fade-in');
                element.classList.add('active-crew-toggle');
                if (element.getAttribute('value') === '1') {
                    crewMemberImg.src = json.crew[0].images.webp;
                    crewMemberRole.innerHTML = json.crew[0].role.toUpperCase();
                    crewMemberName.innerHTML = json.crew[0].name.toUpperCase();
                    crewMemberBio.innerHTML = json.crew[0].bio;
                } else if (element.getAttribute('value') === '2') {
                    crewMemberImg.src = json.crew[1].images.webp;
                    crewMemberRole.innerHTML = json.crew[1].role.toUpperCase();
                    crewMemberName.innerHTML = json.crew[1].name.toUpperCase();
                    crewMemberBio.innerHTML = json.crew[1].bio;
                } else if (element.getAttribute('value') === '3') {
                    crewMemberImg.src = json.crew[2].images.webp;
                    crewMemberRole.innerHTML = json.crew[2].role.toUpperCase();
                    crewMemberName.innerHTML = json.crew[2].name.toUpperCase();
                    crewMemberBio.innerHTML = json.crew[2].bio;
                } else {
                    crewMemberImg.src = json.crew[3].images.webp;
                    crewMemberRole.innerHTML = json.crew[3].role.toUpperCase();
                    crewMemberName.innerHTML = json.crew[3].name.toUpperCase();
                    crewMemberBio.innerHTML = json.crew[3].bio;
                }
            });
        });
        techToggleEls.forEach(element => {
            element.addEventListener('click', function (e) {
                techContentEl.removeAttribute('class', 'fade-in');
                techContentEl.offsetWidth;
                techContentEl.setAttribute('class', 'fade-in')
                techImgEl.removeAttribute('class', 'fade-in-right');
                techImgEl.offsetWidth;
                techImgEl.setAttribute('class', 'fade-in-right');
                for (let i = 0; i < techToggleEls.length; i++) {
                    techToggleEls[i].classList.remove('active-tech-tab');
                }
                element.classList.add('active-tech-tab');

                if (element.getAttribute('value') === '1') {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        techImgEl.src = json.technology[0].images.landscape;
                    } else {
                        techImgEl.src = json.technology[0].images.portrait;
                    }
                    techHeadingEl.innerHTML = json.technology[0].name.toUpperCase();
                    techTextEl.innerHTML = json.technology[0].description;
                } else if (element.getAttribute('value') === '2') {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        techImgEl.src = json.technology[1].images.landscape;
                    } else {
                        techImgEl.src = json.technology[1].images.portrait;
                    }
                    techHeadingEl.innerHTML = json.technology[1].name.toUpperCase();
                    techTextEl.innerHTML = json.technology[1].description;
                } else {
                    if (window.matchMedia('(max-width: 768px)').matches) {
                        techImgEl.src = json.technology[2].images.landscape;
                    } else {
                        techImgEl.src = json.technology[2].images.portrait;
                    }
                    techHeadingEl.innerHTML = json.technology[2].name.toUpperCase();
                    techTextEl.innerHTML = json.technology[2].description;
                }
            });
        });
        if (window.matchMedia('(max-width: 768px)').matches) {
            for (let i = 0; i < techToggleEls.length; i++) {
                if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '1') {
                    techImgEl.src = json.technology[0].images.landscape;
                } else if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '2') {
                    techImgEl.src = json.technology[1].images.landscape;
                } else if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '3') {
                    techImgEl.src = json.technology[2].images.landscape;
                }
            }
        }
        window.addEventListener('resize', function (e) {
            if (this.window.matchMedia('(max-width: 768px)').matches) {
                for (let i = 0; i < techToggleEls.length; i++) {
                    if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '1') {
                        techImgEl.src = json.technology[0].images.landscape;
                    } else if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '2') {
                        techImgEl.src = json.technology[1].images.landscape;
                    } else if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '3') {
                        techImgEl.src = json.technology[2].images.landscape;
                    }
                }
            } else {
                for (let i = 0; i < techToggleEls.length; i++) {
                    if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '1') {
                        techImgEl.src = json.technology[0].images.portrait;
                    } else if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '2') {
                        techImgEl.src = json.technology[1].images.portrait;
                    } else if (techToggleEls[i].classList.contains('active-tech-tab') && techToggleEls[i].getAttribute('value') === '3') {
                        techImgEl.src = json.technology[2].images.portrait;
                    }
                }

            }
        });
    });


/* ----------- */
/* mobile menu */
/* ----------- */

const hamburgerEl = document.querySelector('.hamburger-menu');
const mainMenu = document.querySelector('.header__menu');
const hamburgerElIcon = document.querySelector('.hamburger-menu img');
const menuLinkEls = document.querySelectorAll('.header__menu a');



hamburgerEl.addEventListener('click', function (e) {
    if (hamburgerEl.getAttribute('aria-expanded') === 'false') {
        mainMenu.style = 'transform: translateX(0);';
        hamburgerEl.setAttribute('aria-expanded', 'true');
        hamburgerElIcon.src = 'assets/shared/icon-close.svg';
    } else {
        mainMenu.removeAttribute('style');
        hamburgerEl.setAttribute('aria-expanded', 'false');
        hamburgerElIcon.src = 'assets/shared/icon-hamburger.svg';
    }
});


