/* author: katie diamond
version: 3
date: 10/13/2021
*/

function openGithub() {
    window.open('https://github.com/thekatiedee');
}

function openLinkedIn() {
    window.open('https://www.linkedin.com/in/katie-diamond-2bb93980/');
}

function sendEmail() {
    window.open('mailto:katie.m.diamond@gmail.com?subject=contacting%20from%20your%20website&body=write%20your%20message%20here');
}

function writingSample() {
    window.open('https://www.effortlessinsurance.com/massmutual-life-insurance-review/');
}

function writingSampleTwo() {
    window.open('https://www.quickquote.com/accidental-death-life-insurance/');
}

function seeTheSite() {
    window.open('https://www.dccoaters.net/');
}

// make the year automatically update with the current year


document.getElementById("thisYear").innerHTML = new Date().getFullYear();