/* author: katie diamond
version: 3
date: 10/13/2021
*/

//inspired by W3 schools' code and stackoverflow code. animation code is HIGHLY INSPIRED from a conor bailey tutorial on youtube that i followed along with: https://www.youtube.com/watch?v=cUXcVWHhsJs.
// function collapseMenu() {
// let menu = document.getElementById('menuNav');
// if (menu.style.display === 'none') {
//     menu.style.display = 'block';
// } else {
//     menu.style.display = 'inline';
//     let image = document.getElementById('hamburger');
//     image.src = 'images/x-menu-red.png';
// }

// }
//this code was from the conor bailey tutorial i followed along with
let menuTog = document.querySelector('.menu');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let kdLogo = document.querySelector('.kd-logo');

menuTog.addEventListener('click', ()=>{
    menuTog.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    kdLogo.classList.toggle('active');
    nav.classList.toggle('active');

    //remove active class to restart delayed effect
    contact.classList.remove('active');
    navRight.classList.remove('active');

    if (menuTog.classList.contains('active')) {
        setTimeout(()=> {
            navRight.classList.add('active'); 
        }, 100)

        for(let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            setTimeout(()=> {
                navLinks[i].classList.add('active')   
            }, i * 100)
        }

        setTimeout(()=> {
            contact.classList.add('active'); 
        }, 700)

    }

})


// function seeMore() {
//     let seeMore = document.querySelector('#see-more');
//     seeMore.addEventListener('click', ()=> {
//         alert('you did it!')
//     })
// }

function openGithub() {
    window.open('https://github.com/thekatiedee');
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/in/katie-diamond-2bb93980/');
}

function sendEmail() {
    window.open('mailto:katie.m.diamond@gmail.com?subject=contacting%20from%20your%20website&body=write%20your%20message%20here');
}

function seeTheSite() {
    window.open('https://www.dccoaters.net/');
}

function writingSample() {
    window.open('https://www.effortlessinsurance.com/massmutual-life-insurance-review/');
}

function writingSampleTwo() {
    window.open('https://www.quickquote.com/accidental-death-life-insurance/');
}