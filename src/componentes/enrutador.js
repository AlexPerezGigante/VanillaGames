export const enrutador = {
    rutas: {
        home: import('../vistas/homeVista'),
        // Usuarios
        admin: import('../vistas/adminVista.js'),
        registro: import('../vistas/registroVista.js'),
        login: import('../vistas/loginVista.js'),
        // Proyectos
        proyectos: import('../vistas/proyectosVista.js'),
        proyectoNuevo: import('../vistas/proyectoNuevoVista.js'),
        proyectoEditar: import('../vistas/proyectoEditarVista.js'),
        proyectoDetalle: import('../vistas/proyectoDetalleVista.js'),
        404: import('../vistas/404.js')
    },

    router: () => {
        // Método que obtiene la ruta del navegador
        router: async () => {
            // Capturamos el hash # aue ha cambiado en la url
            const pathCompleto = window.location.hash
            // Separamos la ruta del posible parametro que reciba
            const path = pathCompleto.split('/')[1]
            const parametro = pathCompleto.split('/')[2]
        }
    },
    observadorRutas: () => {
        //Capturamos los eventos click sobre el body
        document.body.addEventListener('click', event => {
            //Evitamos que se cargue la página
            const link = event.target
            if (link.classList.contains('router-link')) {
            console.log('router-link')
            event.preventDefault()
            //obtenemos la ruta del enlace sin el .html
            const href = link.getAttribute('href')
            // Añadimos la nueva ruta al historial

            // (El método pushState() permite agregar un nuevo estado a la pila
            //  del historial del navegador. Esto significa que una nueva entrada
            // de historial se agrefa a la pila y a la URL del navegador
            // se actualiza sin recargar la página)
            window.history.pushState({path: href},'',href)
            // y ejecutamos el router de nuevo para que detecte los cambios con el evento popstate
            enrutador.router()
            }
        })
        // Detectamos cuando alguien navega por el historial con los botones avanzar y retroceder del navegador
        window.addEventListener('popstate', (e) =>{
            console.log('Popstate, te mueves por el historial')
            enrutador.router()
        })
    }
  }