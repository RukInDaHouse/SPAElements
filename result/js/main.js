var container = document.getElementsByClassName('container');
var node = document.getElementById("nested");

    setTimeout(function(){
        if (node.parentNode) {
  node.parentNode.removeChild(node);
}
        container[0].classList.remove('invisible');
    }, 2000);



