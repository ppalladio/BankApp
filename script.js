'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach((el) => {
    return el.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

//**+ learn more scrolling */

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (_e) => {
    const s1coords = section1.getBoundingClientRect();
    // console.log('current scroll', window.pagexoffset, window.pageyoffset);
    // console.log('height/width vp:' ,docuemnt.docuemntElement.clientHeight, document.docuemntElement.clientWidth);

    //*' not smooth */
    // window.scrollTo(
    //     s1coords.left + window.pageXOffset,
    //     s1coords.top + window.pageYOffset,
    // );
    //**' adding smooth behavior */
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    //**' mordern JS */
    section1.scrollIntoView({ behavior: 'smooth' });
});

//**- page navigation */

// document.querySelectorAll('nav__link').forEach((el) =>
//     el.addEventListener('click', (e) => {
//         e.preventDefault();
//         //**? smooth is not working */
//         const id = this.getAttribute('href');
//         console.log(this);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     }),
// );

//**. event delegation */
/**
 *.1  add event listener to common parent el
 * .2 determin what el originated the event
 */

document.querySelector('.nav__links').addEventListener('click', (e) => {
    e.preventDefault();

    //** matching strategy */
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
});

//**- DOM traversing */
const h1 = document.querySelector('.h1');
/** going downwards
 *+h1.querySelectorAll('.hightlight')
 *+ h1.childNodes
 *+ h1.children HTMLCollection, update in real time
 *+ h1.firstElementChild.style.color
 *+ h1.lastElementChild
 * /

/** going upwards 
 *+ hi.partentNode
 *+ h1.parentElement
 *+ hi.closest('.header').style.backgrondColor  closest ≠ querySelector
 */

/** siblings only direct siblings
 *+ h1.previousElementSibling
 *+ h1.nextElementSibling
 *+ h1.previousSibling
 *+ h1.nextSibling
 *
 */

//**- tabs comp */
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.operations__tab');
    console.log(e.target);
    console.log(clicked);
    //** guard clause */
    if (!clicked) return;
    tabs.forEach((tab) => tab.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');
    tabsContent.forEach((tab) =>
        tab.classList.remove('operations__tab--active'),
    );

    document
        .querySelector(`.operations__content--${clicked.dataset.tab}`)
        .classList.add('operations__content--active');
});

//**- menu fade  */
//*!
const nav = document.querySelector('.nav');
const mouseover = (e) => {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const sliblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');
        sliblings.forEach((el) => {
            if (el !== link) {
                el.style.opacity = this; //** this keyword is opacity */
            }
        });
        logo.style.opacity = this;
    }
};

nav.addEventListener('mouseover', mouseover.bind(0.5));

nav.addEventListener('mouseout', mouseover.bind(1));


//- sticky nav

window.addEventListener('scroll', (_e) =>{
    
})













//**+ event propagation */
// const randomInt = (min, max) =>
//     Math.floor(Math.random() * (max - min + 1) + min);

// const randonColor = () =>
//     `rbg(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', e =>{
//   this.style.backgrondColor = randonColor;

//   //** */ e.stopPropagation(); stop bubbling, parent elements wont be reached
// })

// document.querySelector('.nav__links').addEventListener('click', e =>{
//   this.style.backgrondColor = randonColor;
// })

// document.querySelector('.nav').addEventListener('click', e =>{
//   this.style.backgrondColor = randonColor;
// })
