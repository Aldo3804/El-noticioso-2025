

const boton = document.querySelector("#login")

boton.addEventListener("", () => {
    alert("¡Has iniciado sesión!");
})

function moverScroll(direccion) {
    const contenedor = document.getElementById('lista-noticias');
    
    // Obtenemos el ancho de una tarjeta para saber cuánto mover
    const tarjeta = contenedor.querySelector('a');
    const anchoMover = tarjeta.offsetWidth + 15; // Ancho + el Gap
    
    contenedor.scrollBy({
        left: direccion * anchoMover,
        behavior: 'smooth'
    });
}

const contenedor = document.getElementById('lista-noticias');
const btnAnterior = document.getElementById('anterior');
const btnSiguiente = document.querySelector('.flecha.despues'); 

contenedor.addEventListener('scroll', () => {
    
    const esElInicio = contenedor.scrollLeft <= 10;
    
    btnAnterior.classList.toggle('inactivo', esElInicio);

    const llegoAlFinal = (contenedor.scrollLeft + contenedor.clientWidth) >= (contenedor.scrollWidth - 10);

    btnSiguiente.classList.toggle('inactivo', llegoAlFinal);
});

