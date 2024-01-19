import { header } from "./componentes/header"
import { footer } from "./componentes/footer"
import { enrutador } from "./componentes/enrutador"

//import Bootstrap JS
import * as bootstrap from 'bootstrap'
//import custom CSS
import './scss/styles.scss'

//inyectamos componente header
document.querySelector('header').innerHTML = header.template

// Inyectamos componente footer
document.querySelector('footer').innerHTML = footer.template

enrutador.observadorRutas()
// Cargamos página home
window.location = '#/home'

