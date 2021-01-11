'use strict';

var quizcardContainer = document.querySelector('.quizcard_second');
var allCards = document.querySelectorAll('.flip-card_second');
var nope = document.getElementById('nope_second');
var love = document.getElementById('love_second');
var next = document.getElementById('next_second');
var quizcardbuttons = document.querySelectorAll('quizcard--buttons_second');


function initCards(card, index) {
  var newCards = document.querySelectorAll('.flip-card_second:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.opacity = (10 - index) / 10;
  });
  
  quizcardContainer.classList.add('loaded');
}

initCards();

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.flip-card_second:not(.removed)');
    var next = document.querySelectorAll('.next_second:not(.removed)');

    var card = cards[0];
    var nextbutton = next[0];

    card.classList.add('removed');
    nextbutton.classList.add('removed');

    if (love) {
      card.style.zIndex = 1000000000000000000;
      card.style.transform = 'translate(100vw, -100px) rotate(-30deg)';
      cards[1].classList.remove('hidden');
      if (cards.length == 2) {
        document.getElementById('love_second').classList.add('invisible');
        document.getElementById('love__next_second').classList.remove('invisible');
      }
    } else {
          if (cards.length == 1) {
      document.getElementById('next_second').classList.add('invisible');
      document.getElementById('nope__next_second').classList.remove('invisible');
    }
      card.classList.toggle('do-flip');
      card.style.zIndex = 1000000000000000000;
        document.getElementById('nope_second').disabled = true;
        document.getElementById('love_second').disabled = true;
        document.getElementById('nope_second').style.opacity = '0';
        document.getElementById('love_second').style.opacity = '0';

      nextbutton.onclick = function() {
        card.style.zIndex = 1000000000000000000;
        card.style.transform = 'translate(-100vw, -100px) rotate(30deg) rotateY(-180deg)';
        cards[1].classList.remove('hidden');
        document.getElementById('nope_second').disabled = false;
        document.getElementById('love_second').disabled = false;
        document.getElementById('nope_second').style.opacity = '1';
        document.getElementById('love_second').style.opacity = '1';
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









