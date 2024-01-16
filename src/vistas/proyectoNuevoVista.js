export default {
    template: //html
    `
    <div class="container">
                <h1 class="mt-5">Nuevo proyecto</h1>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-outline-secondary mt-5">
                        <i class="bi bi-arrow-bar-left" style="font-size: 1em"></i>
                        Volver</button
                    >
                </div>

                <div class="row mt-2">
                    <div class="col-12 col-md-4 pt-2 mb-3">
                        <img src="images/juego.jpg" alt="" class="img-fluid" />
                    </div>
                    <div class="col-12 col-md-8">
                        <form novalidate action="" class="form border shadow-sm p-3">
                            <label class="form-label" for="nombre"><strong>Nombre: </strong></label>
                            <input required id="nombre" type="text" placeholder="Nombre Autor" class="form-control" />
                            <div class="invalid-feedback ">
                                Este campo no puede estar vacío
                            </div>
                            <label class="form-label mt-2" for="descripcion"><strong>Descripción: </strong></label>
                            
                            <textarea required id="descripcion" class="form-control" rows="4" placeholder="Descripcion" ></textarea>
                            <div class="invalid-feedback ">
                                Este campo no puede estar vacío
                            </div>
                            <label class="form-label mt-2" for="estado"><strong>Estado: </strong></label>
                            <select id="estado" class="form-control">
                                <option value="estado">estado</option>
                                <option value="otro estado">otro estado</option>
                            </select>
                            <label class="form-label mt-2" for="fecha"><strong>Fecha: </strong></label>
                            <input required min="2020-01-01" id="fecha" type="date" class="form-control" />
                            <div class="invalid-feedback ">
                                Selecciona una fecha valida
                            </div>
                            <label class="form-label mt-2" for="nombre"><strong>Enlace: </strong></label>
                            <input required id="enlace" type="url" class="form-control" placeholder="http://enlace.com" />
                            <div class="invalid-feedback ">
                                Este campo no puede estar vacío
                            </div>
                            <label class="form-label mt-2" for="nombre"
                                ><strong>Repositorio: </strong></label
                            >
                            <input required id="repositorio" type="url" class="form-control" placeholder="user.github.com/123456" />
                            <div class="invalid-feedback ">
                                Este campo no puede estar vacío
                            </div>
                            <input type="submit" class="btn btn-success mt-3" value="Subir proyecto">
                        </form>
                    </div>
                </div>
            </div>
    `,
    script: () =>{
//Capturamos el formulario en una variable
const formulario = document.querySelector("form")
//Detectamos su evento submit (enviar)
formulario.addEventListener("submit", (event) => {
  //Comprobamos si el formulario no valida 
  if (!formulario.checkValidity()) {
    //Detenemos el evento enviar (submit)
    event.preventDefault()
    event.stopPropagation()
  }
  //Y añadimos la clase 'was-validate' para que se muestren los mensajes
  formulario.classList.add('was-validated')
});
    }
}