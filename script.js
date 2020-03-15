const MENU = document.getElementById('menu')
const BUTTON = document.getElementById('btn')
const CLOSE_BUTTON = document.getElementById('close-btn')
const IMAGES = document.getElementById('imgs')
const TABS = document.getElementById ('tabs')

//MENU

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

//FORM

BUTTON.addEventListener('click', () => {
    const subject = document.getElementById('subject').value;
    const describe = document.getElementById('describe').value;
    (subject=="") ? document.getElementById('result-subject').innerText='Без темы': document.getElementById('result-subject').innerText = 'Тема: '+subject; 
    (describe=="") ? document.getElementById('result-describe').innerText='Без описания': document.getElementById('result-describe').innerText = 'Описание: '+describe;
    document.getElementById('message-block').classList.remove('hidden');
})

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
})

//BORDER IMAGE

IMAGES.addEventListener('click', (event) => {
    IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('border'));
    let target=event.target;
    if (target.tagName != 'IMG') return
    target.classList.add('border');
})

//ACTIVE TABS AND RANDOM IMAGE

TABS.addEventListener('click', (event) => {
    TABS.querySelectorAll('p').forEach(el => el.classList.remove('box-shadow-tabs'));
    let target=event.target;
    if (target.tagName != 'P') return
    target.classList.add('box-shadow-tabs');
})

TABS.addEventListener('click', (event) => {
    const ARRAY_IMAGES = [...document.getElementById('imgs').querySelectorAll('li')].sort(function compareRandom(a, b) {
        return Math.random() - 0.5;
    });
    if (event.target.tagName != 'P') return
    IMAGES.innerHTML;
    IMAGES.append(...ARRAY_IMAGES);
});

//SLIDER

let items = document.querySelectorAll('.slider .slide');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

//OFF LAYER

document.getElementById('layer1').addEventListener('click', (event) => {
        event.target.classList.add('hide-layer');
})

document.getElementById('base1').addEventListener('click', (event) => {
    document.getElementById('layer1').classList.remove('hide-layer');
})

document.getElementById('layer2').addEventListener('click', (event) => {
    event.target.classList.add('hide-layer');
})

document.getElementById('base2').addEventListener('click', (event) => {
document.getElementById('layer2').classList.remove('hide-layer');
})

document.getElementById('layer3').addEventListener('click', (event) => {
    event.target.classList.add('hide-layer');
})

