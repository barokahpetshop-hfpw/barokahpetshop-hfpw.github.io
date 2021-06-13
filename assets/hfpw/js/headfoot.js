var _ready = false;
$( document ).ready( function() { 
    if (_ready) { return; }
     _ready = true;
     $("#navbar-barokah").load("header.html");
     $("#footer-barokah").load("footer.html");
});
