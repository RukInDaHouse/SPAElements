'use strict';

var quizcardContainer = document.querySelector('.quizcard');
var allCards = document.querySelectorAll('.flip-card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');
var next = document.getElementById('next');

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
    var moveOutWidth = document.body.clientWidth * 0.3;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -900px) rotate(0deg)';
    } else if (nope){
      card.classList.toggle('do-flip');
      card.style.zIndex = 10;
      document.getElementById('next').onclick = function() {
        card.style.transform = 'translate(' + moveOutWidth + 'px, 900px) rotate(180deg)';
  };
        document.getElementById('nextt').onclick = function() {
        card.style.transform = 'translate(' + moveOutWidth + 'px, 900px) rotate(180deg)';
  };
  document.getElementById('nextth').onclick = function() {
        card.style.transform = 'translate(' + moveOutWidth + 'px, 900px) rotate(180deg)';
  };
    document.getElementById('nextf').onclick = function() {
        card.style.transform = 'translate(' + moveOutWidth + 'px, 900px) rotate(180deg)';
  };
      document.getElementById('nextfo').onclick = function() {
        card.style.transform = 'translate(' + moveOutWidth + 'px, 900px) rotate(180deg)';
  };
        document.getElementById('nextsix').onclick = function() {
        card.style.transform = 'translate(' + moveOutWidth + 'px, 900px) rotate(180deg)';
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

  document.getElementById('next').onclick = function() {
  document.getElementById('flip-card').classList.toggle('do-flip');
  };




