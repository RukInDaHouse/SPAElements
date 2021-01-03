var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var container = document.getElementsByClassName('container');
var audio = document.getElementsByTagName('audio');
var arrow = document.getElementsByClassName('arrownext');


map[2].onclick = function() {
    var audio = new Audio(); 
    audio.src = 'volume/ep1.mp3'; 
    audio.autoplay = true; 
    
    helloscreen[0].classList.add('invisible');

    setTimeout(function(){
    	map[4].classList.remove('invisible');
    	map[4].classList.add('fullscreen__leaf');
    }, 33000);

    setTimeout(function(){
    	var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
    }, 37000);

    setTimeout(function(){
        container[0].classList.remove('invisible');
    }, 37000);

    setTimeout(function(){
        var audio = new Audio(); 
        audio.src = 'volume/ep2.mp3'; 
        audio.autoplay = true;
    }, 39000);

    setTimeout(function(){
        container[2].classList.remove('invisible');
    }, 38000);

    setTimeout(function(){
        container[3].classList.remove('invisible');
    }, 44000);
}

map[0].onclick = function() {  
    helloscreen[0].classList.add('flashmodal');
}

arrow[0].onclick = function() {  
    var findElement = container[0];
    findElement.parentNode.removeChild(findElement);
    container[0].classList.remove('invisible');

    setTimeout(function(){
    var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
    }, 4000);
}
