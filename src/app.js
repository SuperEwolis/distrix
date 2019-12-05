// Menu toggler

var menu = document.getElementById('menu');
var menu_btn_open = document.getElementById('menu-open');
var menu_btn_close = document.getElementById('menu-close');

menu_btn_open.addEventListener('click', function() {
    menu.classList.add('active');
});

menu_btn_close.addEventListener('click', function() {
    menu.classList.remove('active');
});
