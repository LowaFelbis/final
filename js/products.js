const d = document;
const navOpen = d.querySelector('.nav__open');
const navClose = d.querySelector('.nav__close');
const navList = d.querySelector('.nav__list');

// Abrir y cerrar el menú
navOpen.addEventListener('click', function () {
  navList.classList.toggle('nav__list--active'); // Cambia la clase active para mostrar/ocultar
});

// Cambiar el ícono de menú por el de cerrar
d.addEventListener('DOMContentLoaded', function () {
  navOpen.addEventListener('click', function () {
    if (navOpen.classList.contains('bx-menu')) {
      navOpen.classList.remove('bx-menu');
      navOpen.classList.add('bx-x-circle');
    } else {
      navOpen.classList.remove('bx-x-circle');
      navOpen.classList.add('bx-menu');
    }
  });
})

// Cerrar el menú al hacer clic en un elemento
const navListItems = d.querySelectorAll('.nav__list li');

navListItems.forEach(item => {
  item.addEventListener('click', function () {
    navList.classList.remove('nav__list--active'); // Remueve la clase active para ocultar el menú
  });
});

//  ! es el operador de negación. Estamos verificando si el elemento target NO está contenido en navList y NO está contenido en navOpen.

// Cerrar el menú al hacer clic fuera del menú
d.addEventListener('click', function (e) {
  const target = e.target;
  if (!navList.contains(target) && !navOpen.contains(target)) {
    navList.classList.remove('nav__list--active'); // Remueve la clase active para ocultar el menú
  }
});