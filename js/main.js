var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var container = document.getElementsByClassName('container');
var audio = document.getElementsByTagName('audio');
var arrow = document.getElementsByClassName('arrownext');
var header = document.getElementsByClassName('headerdisable');
var mapbackgroundimage = document.getElementsByClassName('mapbackgroundimage');
var close__game = document.getElementById('close__game');


container[0].onclick = function() {
    document.getElementsByClassName('popup-wrapper')[0].classList.add('actived');
}

close__game.onclick = function() {
    header[0].classList.remove('invisible');
    container[0].classList.add('invisible');
    document.getElementsByClassName('bigcontainer')[0].classList.add('invisible');
}

map[2].onclick = function() {
    var audio = new Audio(); 
    audio.src = 'volume/ep1.mp3'; 
    audio.autoplay = true; 
    header[0].classList.add('invisible');
    header[1].classList.add('invisible');
    header[2].classList.add('invisible');
    helloscreen[0].classList.add('invisible');
    map[5].classList.remove('invisible');
    map[5].classList.add('step__zero');
    mapbackgroundimage[1].classList.add('zoom__small__parents');
    mapbackgroundimage[2].classList.add('zoom__small__ballun');
    mapbackgroundimage[3].classList.add('zoom__small__balluncenter');
    mapbackgroundimage[4].classList.add('zoom__small__cross');
    mapbackgroundimage[5].classList.add('zoom__small__pump');
    mapbackgroundimage[6].classList.add('zoom__small__sign');
    mapbackgroundimage[7].classList.add('zoom__small__stage');


    setTimeout(function(){
    	map[4].classList.remove('invisible');
    	map[4].classList.add('fullscreen__leaf');
    }, 29000);

    setTimeout(function(){
    	var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
    }, 36000);

    setTimeout(function(){
        container[0].classList.remove('invisible');
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

    var card = cards[0];
    var nextbutton = next[0];

    card.classList.add('removed');
    nextbutton.classList.add('removed');

    if (love) {
      card.style.zIndex = 1000000000000000000;
      card.style.transform = 'translate(100vw, -100px) rotate(-30deg)';
      cards[1].classList.remove('hidden');
      if (cards.length == 3) {
        document.getElementById('love').classList.add('invisible');
        document.getElementById('love__next').classList.remove('invisible');
      }
    } else {
          if (cards.length == 2) {
      document.getElementById('next').classList.add('invisible');
      document.getElementById('nope__next').classList.remove('invisible');
    }
      card.classList.toggle('do-flip');
      card.style.zIndex = 1000000000000000000;
        document.getElementById('nope').disabled = true;
        document.getElementById('love').disabled = true;
        document.getElementById('nope').style.opacity = '0';
        document.getElementById('love').style.opacity = '0';

      nextbutton.onclick = function() {
        card.style.zIndex = 1000000000000000000;
        card.style.transform = 'translate(-100vw, -100px) rotate(30deg) rotateY(-180deg)';
        cards[1].classList.remove('hidden');
        document.getElementById('nope').disabled = false;
        document.getElementById('love').disabled = false;
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
    }, 36000);

    setTimeout(function(){
        var audio = new Audio(); 
        audio.src = 'volume/ep2.mp3'; 
        audio.autoplay = true;
    }, 40000);

}

map[0].onclick = function() {  
    helloscreen[0].classList.add('flashmodal');
}

    document.getElementById('love__next').onclick = function() {  
 document.getElementById('love__next').disabled = true;
 document.querySelector('.quizcard').style.opacity = '0';
    var audio = new Audio(); 
        audio.src = 'volume/ep3.mp3'; 
        audio.autoplay = true;

    setTimeout(function(){
        map[0].classList.remove('invisible');
        map[0].classList.add('fullscreen__leaf');
    }, 8000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
        var audio = new Audio(); 
        audio.src = 'volume/ep4.mp3'; 
        audio.autoplay = true;
    }, 16000);

    setTimeout(function(){
        map[2].classList.remove('invisible');
        map[2].classList.add('fullscreen__leaf');
    }, 25000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
    }, 32000);
}

 document.getElementById('nope__next').onclick = function() {  
 document.getElementById('nope__next').disabled = true;
 document.querySelector('.quizcard').style.opacity = '0';
    var audio = new Audio(); 
        audio.src = 'volume/ep3.mp3'; 
        audio.autoplay = true;


    setTimeout(function(){
        map[0].classList.remove('invisible');
        map[0].classList.add('fullscreen__leaf');
    }, 12000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
        var audio = new Audio(); 
        audio.src = 'volume/ep4.mp3'; 
        audio.autoplay = true;
    }, 16000);

    setTimeout(function(){
        map[2].classList.remove('invisible');
        map[2].classList.add('fullscreen__leaf');
    }, 25000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
            var audio = new Audio(); 
        audio.src = 'volume/ep6.mp3'; 
        audio.autoplay = true;
    }, 32000);
}

document.getElementById('love__next_second').onclick = function() {  
 document.getElementById('love__next_second').disabled = true;
 document.querySelector('.quizcard_second').style.opacity = '0';
 var map = document.getElementsByClassName('map');

    var audio = new Audio(); 
        audio.src = 'volume/ep6.mp3'; 
        audio.autoplay = true;
    map[0].classList.remove('invisible');
    map[1].classList.remove('invisible');
    map[2].classList.remove('invisible');
    map[0].classList.add('step__one__parents');
    map[1].classList.add('step__two__parents');
    map[2].classList.add('step__three__parents');

}

 document.getElementById('nope__next_second').onclick = function() {  
 document.getElementById('nope__next_second').disabled = true;
 document.querySelector('.quizcard_second').style.opacity = '0';
 var map = document.getElementsByClassName('map');

    var audio = new Audio(); 
        audio.src = 'volume/ep6.mp3'; 
        audio.autoplay = true;
    map[0].classList.remove('invisible');
    map[1].classList.remove('invisible');
    map[2].classList.remove('invisible');
    map[0].classList.add('step__one__parents');
    map[1].classList.add('step__two__parents');
    map[2].classList.add('step__three__parents');
}


