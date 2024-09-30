let navbar = document.querySelector('.navbar');         /** La barra hamburguesa */
let open = document.querySelector('.toggler-nav');           /** hamburguesa que se abre */
let close = document.querySelector('.toggler-nav-close');         /** hamburguesa que se cierra */



/** ABRIR HAMBURGUESA */

open.addEventListener("click", ()=>{       /** al hacer click en la hamburguesa que se abre se desglosa todo eso :  */

     navbar.classList.add('navbar-add');     /** a la barra hamburguesa le añadimos una clase */
     open.style.display = 'none';            /** display = 'none' :  para desaparecer codigo   */
     close.style.display = 'block';          /** display = 'block' : para aparecer    */

})



/**CERRAR HAMBURGUESA */

close.addEventListener("click", ()=>{      

    navbar.classList.remove('navbar-add');      /**mismo codigo de arriba solo que invertido */
    open.style.display = 'block';
    close.style.display = 'none';

})



