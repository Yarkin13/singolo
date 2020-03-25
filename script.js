const MENU = document.getElementById('menu')
const BUTTON = document.getElementById('btn')
const CLOSE_BUTTON = document.getElementById('close-btn')
const IMAGES = document.getElementById('imgs')
const TABS = document.getElementById ('tabs')

//MENU

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

//FORM

document.querySelector('.form1').addEventListener('submit', (event) => {
    event.preventDefault();
    if(document.querySelector('.form1').checkValidity()){
    const subject = document.getElementById('subject').value;
    const describe = document.getElementById('describe').value;
    (subject=="") ? document.getElementById('result-subject').innerText='Без темы': document.getElementById('result-subject').innerText = 'Тема: '+subject; 
    (describe=="") ? document.getElementById('result-describe').innerText='Без описания': document.getElementById('result-describe').innerText = 'Описание: '+describe;
    document.getElementById('message-block').classList.remove('hidden');
    }
    document.querySelector('.form1').reset();
})

CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('message-block').classList.add('hidden');
})

//BORDER IMAGE

IMAGES.addEventListener('click', (event) => {
    IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('border'));
    let target=event.target;
    if (target.tagName != 'IMG') return;
    if (target.classList.contains('border')) {
        target.classList.remove('border')
    }
    console.log(target);
})

IMAGES.addEventListener('click', (event) => {
    IMAGES.querySelectorAll('img').forEach(el => el.classList.remove('border'));
    let target=event.target;
    if (target.tagName != 'IMG') return;
    target.classList.add('border');
    }
)
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


//MENU SCROLL

window.addEventListener('scroll', function() {
    if(window.pageYOffset>0) {
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    MENU.querySelector('.home').classList.add('active');
    }
    if(window.pageYOffset>500) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        MENU.querySelector('.services').classList.add('active');
    }
    if(window.pageYOffset>1100) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        MENU.querySelector('.portfolio').classList.add('active');
    }
    if(window.pageYOffset>2000) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        MENU.querySelector('.about').classList.add('active');
    }
    if(window.pageYOffset>2550) {
        MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
        MENU.querySelector('.contact').classList.add('active');
    }
  });
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href');
        document.getElementById(blockID.replace(/^#/,'')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })

    //MENU MOBILE 
    
    document.querySelector('.for-mobile-menu').addEventListener('click', (event)=> {
        if (MENU.classList.contains('hidden-menu')) {
        MENU.classList.remove('hidden-menu');
        document.getElementById('message-block').classList.remove('hidden') 
        document.getElementById('message').classList.add('hidden') 
        }
        else {
            MENU.classList.add('hidden-menu');
            document.getElementById('message-block').classList.add('hidden')
        }
    })

    MENU.querySelector('.home').addEventListener('click', (event) => {
        if(document.body.clientWidth<767) 
        MENU.classList.add('hidden-menu');
        document.getElementById('message-block').classList.add('hidden')
        
    })

    MENU.querySelector('.services').addEventListener('click', (event) => {
        if(document.body.clientWidth<767) 
        MENU.classList.add('hidden-menu');
        document.getElementById('message-block').classList.add('hidden')
    })

    MENU.querySelector('.portfolio').addEventListener('click', (event) => {
        if(document.body.clientWidth<767) MENU.classList.add('hidden-menu');
        document.getElementById('message-block').classList.add('hidden')
    })

    MENU.querySelector('.about').addEventListener('click', (event) => {
        if(document.body.clientWidth<767) MENU.classList.add('hidden-menu');
        document.getElementById('message-block').classList.add('hidden')
    })

    MENU.querySelector('.contact').addEventListener('click', (event) => {
        if(document.body.clientWidth<767) MENU.classList.add('hidden-menu');
        document.getElementById('message-block').classList.add('hidden')
    })
    

}

