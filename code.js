var evento = document.getElementById('evento');
var contenido = document.getElementById('c');
var triangulo = document.getElementById('t');
var button = document.getElementById('boton');
var state = 0;

button.addEventListener('click', presionar);

function presionar() {
    if (state == 0) {
        evento.style.bottom = '70px';
        contenido.classList.add('s-c');
        triangulo.classList.add('s-t');
        contenido.innerHTML = '<p>S H A R E</p> <div class="face"></div> <div class="twitte"></div> <div class="pin"></div>';
        state = Math.random();
    } else {
        evento.style.bottom = '0';
        contenido.classList.remove('s-c');
        triangulo.classList.remove('s-t');
        contenido.innerHTML = '';
        state = 0;
    }
}