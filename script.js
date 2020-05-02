
/*selecciona el elemento con clase parallax  y lo guarda en una variable*/

document.addEventListener('scroll', apply2DEffects)
let parallaxElements = document.querySelectorAll('.parallax');
let vertical, horizontal


/*con documentElement.scrollTop estamos mirando cuando baja el scrool y lo guardamos en una variable*/



function apply2DEffects() {

  parallaxElements.forEach(function (element) {


    if (element.dataset.direction === "horizontal") {

        horizontal = element.dataset.speed * element.getBoundingClientRect().top

        element.style.transform = `translate( -${horizontal}px)`

      }

 
    })
}
