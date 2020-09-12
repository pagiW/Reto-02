var evento = document.getElementById('evento');
var contenido = document.getElementById('c');
var triangulo = document.getElementById('t');
var button = document.getElementById('boton');
var imgs = document.getElementById('i-rc');
var perrfil = document.getElementById('perhtml');
var main = document.getElementById('principalSeccion');
var state = 0;
var pantalla = window.matchMedia("screen and (max-width: 425px)");

pantalla.addEventListener('change', responsive);

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
function presponsive() {
    if (state == 0) {
        button.style.top = "-40px";
        button.style.right = "20px";
        button.style.padding = "8px 0";
        contenido.classList.add('s-c');
        imgs.style.backgroundColor = "hsl(217, 19%, 35%)";
        imgs.style.width = "100%";
        imgs.style.height = "71px";
        imgs.style.borderRadius = "0 0 15px 15px";
        perrfil.innerHTML = '';
        main.style.bottom = "3px";
        contenido.innerHTML = '<p>S H A R E</p> <div class="face"></div> <div class="twitte"></div> <div class="pin"></div>';
        state = Math.random();
    } else {
        button.style.top = "10px";
        button.style.right = "0";
        button.style.padding = "0";
        imgs.style.backgroundColor = "initial";
        imgs.style.width = "85%";
        imgs.style.height = "initial";
        imgs.style.borderRadius = "0";
        perrfil.innerHTML = '<img src="https://github.com/platzi/reto-componente-de-vista-previa-de-articulo/blob/master/images/avatar-michelle.jpg?raw=true" alt="perfil"><p><span class="name">Michelle Appleton</span><br><span class="date">28 Jun 2020</span></p>';
        contenido.classList.remove('s-c');
        main.style.bottom = "0";
        contenido.innerHTML = '';
        state = 0;
    }
}

function responsive(event) {
    if (event.matches) {
        button.removeEventListener('click', presionar);
        button.addEventListener('click', presponsive);
        button.style.top = "10px";
        button.style.right = "0";
        button.style.padding = "0";
        imgs.style.backgroundColor = "initial";
        imgs.style.width = "85%";
        imgs.style.height = "initial";
        imgs.style.borderRadius = "0";
        evento.style.bottom = '0';
        contenido.classList.remove('s-c');
        contenido.innerHTML = '';
        perrfil.innerHTML = '<img src="https://github.com/platzi/reto-componente-de-vista-previa-de-articulo/blob/master/images/avatar-michelle.jpg?raw=true" alt="perfil"><p><span class="name">Michelle Appleton</span><br><span class="date">28 Jun 2020</span></p>';
        state = 0;
        main.style.bottom = "0";
        triangulo.classList.remove('s-t');
    } else {
        button.style.top = "10px";
        button.style.right = "0";
        button.style.padding = "0";
        imgs.style.backgroundColor = "initial";
        imgs.style.width = "85%";
        imgs.style.height = "initial";
        imgs.style.borderRadius = "0";
        button.addEventListener('click', presionar);
        button.removeEventListener('click', presponsive);
        evento.style.bottom = '0';
        contenido.classList.remove('s-c');
        contenido.innerHTML = '';
        perrfil.innerHTML = '<img src="https://github.com/platzi/reto-componente-de-vista-previa-de-articulo/blob/master/images/avatar-michelle.jpg?raw=true" alt="perfil"><p><span class="name">Michelle Appleton</span><br><span class="date">28 Jun 2020</span></p>';
        state = 0;
        main.style.bottom = "0";
        triangulo.classList.remove('s-t');
    }
}

responsive(pantalla);