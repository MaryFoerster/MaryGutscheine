'use strict'

const img = ['img/spar.jpg', 'img/spar.jpg', 'img/spar.jpg', 'img/spar.jpg','img/spar.jpg','img/spar.jpg','img/spar.jpg',];
const p = ["<p>Heute -30%</p>", "<p>Heute -20%</p>", "<p>Heute -25%</p>", "<p>Heute -90%</p>", "<p>Heute -40%</p>", "<p>Heute -66%</p>", "<p>Heute -20%</p>"];
const weekday = ["<h1>Montag</h1>", "<h1>Dienstag</h1>", "<h1>Mittwoch</h1>", "<h1>Donnerstag</h1>", "<h1>Freitag</h1>", "<h1>Samstag</h1>", "<h1>Sonntag</h1>"];

function meine() {
    for (let i = 0; i < 7; i++) {
        const container = document.getElementById('container');
        const image = document.createElement('img');
        image.src = img[i];
        container.appendChild(image);
        
        const weekdayElement = document.createElement('div');
        weekdayElement.innerHTML = weekday[i];
        container.appendChild(weekdayElement);
        
        const pElement = document.createElement('div');
        pElement.innerHTML = p[i];
        container.appendChild(pElement);
        
        container.appendChild(document.createElement('br'));
    }
}

function howMuch() {
    let anzahl = document.getElementById('anzahl').value;
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (let x = 0; x < anzahl; x++) {
        meine();
    }
}

function start() {
    howMuch();
}