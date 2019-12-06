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

// Contact form AJAX

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("contact-form");
    var button = document.getElementById("contact-form-button");
    var status = document.getElementById("contact-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Merci, votre message a été envoyé !";
        status.classList.add("success");
    }

    function error() {
        status.innerHTML = "Oops! Il y a un problème.";
        status.classList.add("error");
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
