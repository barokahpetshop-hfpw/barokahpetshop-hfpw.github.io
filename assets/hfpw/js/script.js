$("#navbar-barokah").load("header.html", function(){
    $(this).find('#'+halaman).addClass('nav-active');
});
$("#footer-barokah").load("footer.html",function(){
    $(this).find('#tahun').text(new Date().getFullYear()); 
});

