'use strict';

var quizcardContainer = document.querySelector('.quizcard');
var allCards = document.querySelectorAll('.flip-card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');
var next = document.getElementById('next');
var quizcardbuttons = document.querySelectorAll('quizcard--buttons');
var arrow = document.getElementsByClassName('arrownext');


function initCards(card, index) {
  var newCards = document.querySelectorAll('.flip-card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.opacity = (10 - index) / 10;
  });
  
  quizcardContainer.classList.add('loaded');
}

initCards();

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.flip-card:not(.removed)');
    var next = document.querySelectorAll('.next:not(.removed)');

    if (!cards.length) document.getElementsByClassName('arrownext')[0].classList.remove('invisible');

    var card = cards[0];
    var nextbutton = next[0];

    card.classList.add('removed');
    nextbutton.classList.add('removed');

    if (love) {
      card.style.zIndex = 1000000000000000000;
      card.style.transform = 'translate(100vw, -100px) rotate(-30deg)';
      cards[1].classList.remove('hidden');
    } else {
      card.classList.toggle('do-flip');
      card.style.zIndex = 1000000000000000000;
        document.getElementById('nope').style.opacity = '0';
        document.getElementById('love').style.opacity = '0';

      nextbutton.onclick = function() {
        card.style.zIndex = 1000000000000000000;
        card.style.transform = 'translate(-100vw, -100px) rotate(30deg) rotateY(-180deg)';
        cards[1].classList.remove('hidden');
        document.getElementById('nope').style.opacity = '1';
        document.getElementById('love').style.opacity = '1';
  };

    }
    
    initCards();
    event.preventDefault();
  };
}



var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);




