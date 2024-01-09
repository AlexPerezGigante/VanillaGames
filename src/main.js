import { header } from "./componentes/header"
import { footer } from "./componentes/footer"

//import Bootstrap JS
import 'bootstrap'
//import custom CSS
import './scss/styles.scss'

//Importamos vista home
async function cargarVista () {
  const componente = await import('./vistas/homeVista')
  const vista = componente.default
  //inyectamos vista home
  document.querySelector('main').innerHTML = vista.template
}
cargarVista()

//inyectamos componente header
document.querySelector('header').innerHTML = header.template

// Inyectamos componente footer
document.querySelector('footer').innerHTML = footer.template
