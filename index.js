//funcionalidad para la barra de busqeda
//llamamos los items a usar y declaramos las variables necesarias
const btn = document.getElementById("search-btn");
const input = document.getElementById("search-input");
let searchToogle = false;

//agregamos el evento(al hacer click se cambia un valor a verdadero o facil dependiendo del valor anterior y se muestra la barra segun ese valor)
btn.addEventListener("click", () => {
  searchToogle = !searchToogle;
  console.log(searchToogle);
  if (searchToogle === true) {
    input.style.display = "block";
  } else if (searchToogle === false) {
    input.style.display = "none";
  }
});

//menu desplegable 
//llamamos los items a usar y declaramos las variables necesarias
const menuBtn = document.getElementById('menu')
const menu = document.getElementById('menu-responsive')
const header = document.getElementById('header')
let menuToogle = false

//agregamos el evento(al hacer click se cambia un valor a verdadero o facil dependiendo del valor anterior y se muestra la barra segun ese valor)
menuBtn.addEventListener("click", () => {
  menuToogle = !menuToogle;
  if (menuToogle === true) {
    menu.style.display = "flex";
    header.classList.add('bg-white')
  } else if (menuToogle === false) {
    menu.style.display = "none";
    header.classList.remove('bg-white')
  }
});

//ubicacion 
//llamamos los items a usar y declaramos las variables necesarias
const ubicationBtn = document.getElementById('ubication')
const ubication = document.getElementById('dropDownUbicationMenu')
let ubicationToogle = false

//agregamos el evento(al hacer click se cambia un valor a verdadero o facil dependiendo del valor anterior y se muestra la barra segun ese valor)
ubicationBtn.addEventListener("click", () => {
  menuToogle = !menuToogle;
  if (menuToogle === true) {
    ubication.style.display = "flex";
  } else if (menuToogle === false) {
    ubication.style.display = "none";
  }
});