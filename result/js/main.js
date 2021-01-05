var map = document.getElementsByClassName('map');
var helloscreen = document.getElementsByClassName('helloscreen');
var container = document.getElementsByClassName('container');
var audio = document.getElementsByTagName('audio');
var arrow = document.getElementsByClassName('arrownext');
var header = document.getElementsByClassName('headerdisable');
var mapbackgroundimage = document.getElementsByClassName('mapbackgroundimage');


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
    }, 27000);

    setTimeout(function(){
    	var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
    }, 36000);

    setTimeout(function(){
        container[0].classList.remove('invisible');
        container[0].classList.add('falling-leaves');
    }, 36000);

    setTimeout(function(){
        var audio = new Audio(); 
        audio.src = 'volume/ep2.mp3'; 
        audio.autoplay = true;
    }, 38000);

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

arrow[0].onclick = function() {  
 document.getElementsByClassName('arrownext')[0].disabled = true;
    var audio = new Audio(); 
        audio.src = 'volume/ep3.mp3'; 
        audio.autoplay = true;

    setTimeout(function(){
        map[0].classList.remove('invisible');
        map[0].classList.add('fullscreen__leaf');
    }, 11000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
        var audio = new Audio(); 
        audio.src = 'volume/ep4.mp3'; 
        audio.autoplay = true;
    }, 14000);

    setTimeout(function(){
        map[2].classList.remove('invisible');
        map[2].classList.add('fullscreen__leaf');
    }, 19000);

    setTimeout(function(){
        var findElement = container[0];
        findElement.parentNode.removeChild(findElement);
        container[0].classList.remove('invisible');
    }, 21000);
}

