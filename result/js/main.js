var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var container = document.getElementsByClassName('container');
var audio = document.getElementsByTagName('audio');
var arrow = document.getElementsByClassName('arrownext');
var header = document.getElementsByClassName('headercontainer');


map[2].onclick = function() {
    var audio = new Audio(); 
    audio.src = 'volume/ep1.mp3'; 
    audio.autoplay = true; 
    header[0].classList.add('invisible');
    helloscreen[0].classList.add('invisible');
    map[5].classList.remove('invisible');
    map[5].classList.add('step__zero');

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

}

map[0].onclick = function() {  
    helloscreen[0].classList.add('flashmodal');
}

arrow[0].onclick = function() {  
    var findElement = container[0];
    findElement.parentNode.removeChild(findElement);
    container[0].classList.remove('invisible');

    setTimeout(function(){
        map[2].classList.remove('invisible');
        map[2].classList.add('fullscreen__leaf');
    }, 6000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
    }, 9000);
}

