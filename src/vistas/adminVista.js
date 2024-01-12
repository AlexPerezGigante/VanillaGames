export default {
    template: //html
    `
    <div class="container-fluid">
    <h1 class="mt-5">Panel de administración</h1>
    <!-- tabs -->
    <div class="row mt-5">
        <div class="col-12">
            <ul class="nav nav-tabs">
                <li class="nav-item w-50">
                    <a class="nav-link" aria-current="page" href="#">Usuarios</a>
                </li>
                <li class="nav-item w-50">
                
                    <button class="btn border-0 text-dark">Proyectos</button>
                    
                </li>
            </ul>
        </div>
    </div>

    <!-- tabla proyectos -->
    <div class="border border-top-0 p-3">
        <!-- buscador -->
        <div class="row">
            <div class="d-flex col-12 col-md-6 mb-3">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"
                        ><i class="bi bi-search"></i
                    ></span>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                    />
                    <span class="input-group-text" id="addon-wrapping"
                        ><i class="bi bi-x"></i
                    ></span>
                </div>
            </div>
        </div>

        <!-- tabla proyectos -->
        <div class="col-12" style="overflow-x: auto">
            <table
                class="table table-hover align-middle mt-3"
                style="min-width: 1000px"
            >
                <thead>
                    <tr>
                        <th></th>
                        <th>
                            Nombre <span><i class="bi bi-caret-down"></i></span>
                        </th>
                        <th>
                            Descripción <span><i class="bi bi-caret-up"></i></span>
                        </th>
                        <th>
                            Enlace <span><i class="bi bi-caret-up"></i></span>
                        </th>
                        <th>Repositorio</th>
                        <th>
                            Autor <span><i class="bi bi-caret-up"></i></span>
                        </th>
                        <th>
                            Fecha <span><i class="bi bi-caret-up"></i></span>
                        </th>
                        <th>
                            Estado <span><i class="bi bi-caret-up"></i></span>
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tr>
                    <td>
                        <div class="containerImagen">
                            <img width="200px" src="images/juego.jpg" alt="" />
                        </div>
                    </td>
                    <td>Proyecto ejemplo 1</td>
                    <td>Ejemplo de web para centro fp</td>
                    <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                    <td><a href="#">carrebola.github.com/juego1</a></td>
                    <td>carlos</td>
                    <td>13/12/2021</td>
                    <td>?</td>
                    <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                    <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                </tr>
                <tr>
                    <td>
                        <div class="containerImagen">
                            <img width="200px" src="images/juego.jpg" alt="" />
                        </div>
                    </td>
                    <td>Proyecto ejemplo 1</td>
                    <td>Ejemplo de web para centro fp</td>
                    <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                    <td><a href="#">carrebola.github.com/juego1</a></td>
                    <td>carlos</td>
                    <td>13/12/2021</td>
                    <td>?</td>
                    <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                    <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                </tr>
                <tr>
                    <td>
                        <div class="containerImagen">
                            <img width="200px" src="images/juego.jpg" alt="" />
                        </div>
                    </td>
                    <td>Proyecto ejemplo 1</td>
                    <td>Ejemplo de web para centro fp</td>
                    <td><a href="http://www.fpllefia.con">http://www.fpllefia.con</a></td>
                    <td><a href="#">carrebola.github.com/juego1</a></td>
                    <td>carlos</td>
                    <td>13/12/2021</td>
                    <td>?</td>
                    <td><i class="btn btn-outline-primary bi bi-pencil"></i></td>
                    <td><i class="btn btn-outline-danger bi bi-trash3"></i></td>
                </tr>
            </table>
        </div>
    </div>
</div>
<div class="container-fluid d-none ">
<h1 class="mt-5">Panel de administración</h1>
<!-- tabs -->
<div class="row mt-5">
    <div class="col-12">
        <ul class="nav nav-tabs">
            <li class="nav-item w-50">
                <a class="nav-link active" aria-current="page" href="#">Usuarios</a>
            </li>
            <li class="nav-item w-50">
                <a class="nav-link" href="#">Proyectos</a>
            </li>
        </ul>
    </div>
</div>

<!-- tabla proyectos -->
<div class="border border-top-0 p-3">
    <!-- buscador -->
    <div class="row">
        <div class="d-flex col-12 col-md-6 mb-3">
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping"
                    ><i class="bi bi-search"></i
                ></span>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Buscador"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                />
                <span class="input-group-text" id="addon-wrapping"
                    ><i class="bi bi-x"></i
                ></span>
            </div>
        </div>
    </div>

    <!-- tabla usuarios-->
    <div class="col-12" style="overflow-x: auto">
        <table
            class="table table-hover align-middle mt-3"
            style="min-width: 1200px"
        >
            <thead>
                <tr>
                    <th></th>
                    <th>
                        URL imagen <span><i class="bi bi-caret-down"></i></span>
                    </th>
                    <th>
                        Email <span><i class="bi bi-caret-down"></i></span>
                    </th>
                    <th>
                        Nombre <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Apellidos <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Fecha <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Rol <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th>
                        Estado <span><i class="bi bi-caret-up"></i></span>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tr>
                <form novalidate action="" class="form">
                    <td>
                        <div class="containerImagen">
                            <div
                                class="rounded-circle d-flex align-items-end justify-content-end"
                                style="
                                    background-image: url(.images/avatar.svg);
                                    width: 50px;
                                    height: 50px;
                                    background-size: cover;
                                    background-position: center;
                                "
                            >
                                <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                            </div>
                        </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="imagen"></label>
                        <input required
                            id="imagen"
                            type="text"
                            class="form-control form-control-sm"
                            value="http://imagen.com"
                        />
                        <div class="invalid-feedback">
                            Este campo no puede estar vacío
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="email"></label>
                        <input required
                            id="email"
                            type="email"
                            class="form-control form-control-sm"
                            value="email@email.com"
                        />
                        <div class="invalid-feedback">
                            El formato del email no es correcto
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="nombre"></label>
                        <input required
                            id="nombre"
                            type="text"
                            class="form-control form-control-sm"
                            value="Nombre usuario"
                        />
                        <div class="invalid-feedback">
                            Introduce un Nombre
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="apellidos"></label>
                        <input required
                            id="apellidos"
                            type="text"
                            class="form-control form-control-sm"
                            value="Apellidos usuario"
                        />
                        <div class="invalid-feedback">
                            Introduce los apellidos
                          </div>
                    </td>

                    <td>
                        <label class="form-label d-none" for="fecha"></label>
                        <input required
                            id="fecha"
                            type="date"
                            class="form-control form-control-sm"
                        />
                        <div class="invalid-feedback">
                            Introduce una fecha válida
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="rol"></label>
                        <select id="rol" class="form-control form-control-sm" name="" id="">
                            <option value="1">opción</option>
                            <option value="2">opción2</option>
                        </select>
                    </td>
                    <td>
                        <label class="form-label d-none" for="estado"></label>
                        <select id="estado" class="form-control form-control-sm" name="" id="">
                            <option value="1">opción</option>
                            <option value="2">opción2</option>
                        </select>
                    </td>
                    <td><input
                        type="submit"
                        class="btn btn-success"
                        value="Actualizar"
                      /></td>
                    <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                </form>
            </tr>

            <tr>
                <form novalidate action="" class="form">
                    <td>
                        <div class="containerImagen">
                            <div
                                class="rounded-circle d-flex align-items-end justify-content-end"
                                style="
                                    background-image: url(.images/avatar.svg);
                                    width: 50px;
                                    height: 50px;
                                    background-size: cover;
                                    background-position: center;
                                "
                            >
                                <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                            </div>
                        </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="imagen"></label>
                        <input required
                            id="imagen"
                            type="text"
                            class="form-control form-control-sm"
                            value="http://imagen.com"
                        />
                        <div class="invalid-feedback">
                            Este campo no puede estar vacío
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="email"></label>
                        <input required
                            id="email"
                            type="email"
                            class="form-control form-control-sm"
                            value="email@email.com"
                        />
                        <div class="invalid-feedback">
                            El formato del email no es correcto
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="nombre"></label>
                        <input required
                            id="nombre"
                            type="text"
                            class="form-control form-control-sm"
                            value="Nombre usuario"
                        />
                        <div class="invalid-feedback">
                            Introduce un Nombre
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="apellidos"></label>
                        <input required
                            id="apellidos"
                            type="text"
                            class="form-control form-control-sm"
                            value="Apellidos usuario"
                        />
                        <div class="invalid-feedback">
                            Introduce los apellidos
                          </div>
                    </td>

                    <td>
                        <label class="form-label d-none" for="fecha"></label>
                        <input required
                            id="fecha"
                            type="date"
                            class="form-control form-control-sm"
                        />
                        <div class="invalid-feedback">
                            Introduce una fecha válida
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="rol"></label>
                        <select id="rol" class="form-control form-control-sm" name="" id="">
                            <option value="1">opción</option>
                            <option value="2">opción2</option>
                        </select>
                    </td>
                    <td>
                        <label class="form-label d-none" for="estado"></label>
                        <select id="estado" class="form-control form-control-sm" name="" id="">
                            <option value="1">opción</option>
                            <option value="2">opción2</option>
                        </select>
                    </td>
                    <td><input
                        type="submit"
                        class="btn btn-success"
                        value="Actualizar"
                      /></td>
                    <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                </form>
            </tr>

            <tr>
                <form novalidate action="" class="form">
                    <td>
                        <div class="containerImagen">
                            <div
                                class="rounded-circle d-flex align-items-end justify-content-end"
                                style="
                                    background-image: url(.images/avatar.svg);
                                    width: 50px;
                                    height: 50px;
                                    background-size: cover;
                                    background-position: center;
                                "
                            >
                                <i class="btn btn-success btn-sm rounded-circle bi bi-pencil"></i>
                            </div>
                        </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="imagen"></label>
                        <input required
                            id="imagen"
                            type="text"
                            class="form-control form-control-sm"
                            value="http://imagen.com"
                        />
                        <div class="invalid-feedback">
                            Este campo no puede estar vacío
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="email"></label>
                        <input required
                            id="email"
                            type="email"
                            class="form-control form-control-sm"
                            value="email@email.com"
                        />
                        <div class="invalid-feedback">
                            El formato del email no es correcto
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="nombre"></label>
                        <input required
                            id="nombre"
                            type="text"
                            class="form-control form-control-sm"
                            value="Nombre usuario"
                        />
                        <div class="invalid-feedback">
                            Introduce un Nombre
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="apellidos"></label>
                        <input required
                            id="apellidos"
                            type="text"
                            class="form-control form-control-sm"
                            value="Apellidos usuario"
                        />
                        <div class="invalid-feedback">
                            Introduce los apellidos
                          </div>
                    </td>

                    <td>
                        <label class="form-label d-none" for="fecha"></label>
                        <input required
                            id="fecha"
                            type="date"
                            class="form-control form-control-sm"
                        />
                        <div class="invalid-feedback">
                            Introduce una fecha válida
                          </div>
                    </td>
                    <td>
                        <label class="form-label d-none" for="rol"></label>
                        <select id="rol" class="form-control form-control-sm" name="" id="">
                            <option value="1">opción</option>
                            <option value="2">opción2</option>
                        </select>
                    </td>
                    <td>
                        <label class="form-label d-none" for="estado"></label>
                        <select id="estado" class="form-control form-control-sm" name="" id="">
                            <option value="1">opción</option>
                            <option value="2">opción2</option>
                        </select>
                    </td>
                    <td><input
                        type="submit"
                        class="btn btn-success"
                        value="Actualizar"
                      /></td>
                    <td><i class="btn btn-sm btn-outline-danger bi bi-trash3"></i></td>
                </form>
            </tr>
        </table>
    </div>
</div>
</div>
    `,
    script: ()=>{

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