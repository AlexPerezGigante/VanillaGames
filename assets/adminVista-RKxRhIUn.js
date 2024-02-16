import { p as proyectos, a as perfiles } from "./datosPrueba-iQ-B72zm.js";
import { l as ls } from "./main-7ad_z2yh.js";
const editarImagenPerfil = {
  template: (
    // html
    `
  <!-- Ventana modaledición perfil -->
  <div
    class="modal fade"
    id="modalEditarImagenPerfil"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <!-- Formulario de edición de perfil -->
    <form novalidate action="">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Edición de perfil
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="form border shadow-sm p-3">
              <div class="m-1" style="max-width: 400px">
                <div class="imgPerfil border shadow-sm p-3 mb-3">
                  <div
                    id="imagenUsuario"
                    class="imagen mx-auto mb-1 rounded-circle"
                    style="
                      background-image: url(.images/avatar.svg);
                      width: 200px;
                      height: 200px;
                      background-size: cover;
                      background-position: center;
                    "
                  ></div>

                  <!-- Imagen de perfil -->
                  <label for="imagen" class="form-label mt-3">URL imagen:</label>
                  <input
                    id="urlImagenUsuario"
                    type="url"
                    class="form-control"
                    value="http://imagenavatar.png"
                  />
                  <div class="invalid-feedback">La url no es correcta</div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button 
              id="botonActualizarImagen"
              type="button" 
              class="btn btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
  `
  ),
  script: (urlAvatar, urlInputAvatar, user_id) => {
    console.log("modal editar imagen perfil cargado:", urlAvatar);
    document.querySelector("#urlImagenUsuario").value = urlAvatar;
    const imagenUsuario = document.querySelector("#imagenUsuario");
    imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    document.querySelector("#urlImagenUsuario").addEventListener("input", () => {
      urlAvatar = document.querySelector("#urlImagenUsuario").value;
      imagenUsuario.style.backgroundImage = `url(${urlAvatar})`;
    });
    document.querySelector("#botonActualizarImagen").addEventListener("click", () => {
      document.querySelector(`#${urlInputAvatar}`).value = urlAvatar;
      console.log("Actualizando base de datos: " + user_id);
      adminVista.script();
    });
  }
};
const adminVista = {
  template: (
    //html
    `
    <div class="container-fluid" id="adminProyectos">
    <h1 class="mt-5">Panel de administración</h1>
    <!-- tabs -->
    <div class="row mt-5">
        <div class="col-12">
            <ul class="nav nav-tabs ">
                <li class="nav-item w-50 " id="botonUsuariosLi">
                    <button class="btn border-0 text-primary fichaUsuarios" id="botonUsuarios">Usuarios</button>

                </li>
                <li class="nav-item w-50 border border-bottom-0 " id="botonProyectosLi">
                    <button class="btn border-0 text-dark fichaProyectos active" id="botonProyectos">Proyectos</button>
                </li>
            </ul>
        </div>
    </div>

    <!-- tabla proyectos -->
    <div class="border border-top-0 border-bottom-0 p-3 ">
        <!-- buscador -->
        <div class="row">
            <div class="d-flex col-12 col-md-6 mb-3">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping"
                        ><i class="bi bi-search"></i
                    ></span>
                    <input
                    id="inputBusqueda"
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                    />
                    <span class="input-group-text" id="addon-wrapping">
                        <button class="btn" id="borrarBuscador"><i class="bi bi-x"></i></button>
                    </span>
                </div>
            </div>
        </div>

        <!-- tabla proyectos -->
        <div class="col-12 " id="tablaProyectos" style="overflow-x: auto ">
        <!-- -->
            <table
                class="table table-hover align-middle mt-3"
                style="min-width: 1000px"
                id="tabProyectos"
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
    <!-- tabla proyectos -->
<div class="border border-top-0 p-3">
<!-- buscador -->


<!-- tabla usuarios-->
<div class="col-12 " id="tablaUsuarios" style="overflow-x: auto">
    <table
        class="table table-hover align-middle mt-3"
        style="min-width: 1200px"
        id="tabUsuarios"
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
            <form novalidate action="" class="form" id="formAdminUsuarios">
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
</div>
    `
  ),
  script: () => {
    const usuario = ls.getUsuario();
    const datosProyectos = proyectos;
    const datosUsuarios = perfiles;
    let selectUsuarios = true;
    document.querySelector(".nav-tabs").addEventListener("click", (event) => {
      if (event.target.classList.contains("fichaUsuarios")) {
        document.querySelector(".fichaUsuarios").classList.add("active");
        document.querySelector(".fichaProyectos").classList.remove("active");
        selectUsuarios = true;
        console.log("tabusuarios");
        document.querySelector("#tabUsuarios").classList.add("d-block");
        document.querySelector("#tabUsuarios").classList.remove("d-none");
        document.querySelector("#tabProyectos").classList.add("d-none");
      } else {
        document.querySelector(".fichaProyectos").classList.add("active");
        document.querySelector(".fichaUsuarios").classList.remove("active");
        selectUsuarios = false;
        console.log("tabProyectos");
        document.querySelector("#tabProyectos").classList.add("d-block");
        document.querySelector("#tabProyectos").classList.remove("d-none");
        document.querySelector("#tabUsuarios").classList.add("d-none");
      }
      pintaUsuarios(datosUsuarios);
      pintaProyectos(datosProyectos);
    });
    const pintaProyectos = (proyectosFiltrados) => {
      let tablaProyectos = (
        // html
        `
            <!-- Tabla de proyectos -->
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
            <tbody>
            `
      );
      proyectosFiltrados.forEach((proyecto) => {
        tablaProyectos += `
            <tr>
            <td>
              <div class="containerImagen">
                <img 
                  width="200px" 
                  src=${proyecto.imagen || "images/imagenVacia.png"} 
                  alt="imagen proyecto" />
              </div>
            </td>
            <td>${proyecto.nombre}</td>
            <td>${proyecto.descripcion}</td>
            <td><a href="${proyecto.enlace}"><i class="bi bi-link fs-4"></i></a></td>
            <td><a href="${proyecto.repositorio}"><i class="bi bi-folder-symlink fs-4"></i></a></td>
            <td>${proyecto.nombre_usuario} ${proyecto.apellidos_usuario}</td>
            <td>${proyecto.created_at}</td>
            <td>${proyecto.estado}</td>
            <td>
              <a
              data-user_id = ${proyecto.user_id}
              class="d-none d-sm-inline btn btn-sm btn-outline-primary bi bi-pencil botonAdmin botonEditar"
              ></a>
            </td>
            <td>
              <a
                data-user_id = ${proyecto.user_id}
                class="d-none d-sm-inline btn btn-sm btn-outline-danger bi bi-trash3 botonAdmin botonBorrar"
              ></a>
            </td>
          </tr>
            `;
      });
      tablaProyectos += // html
      `
            </tbody>
            </table>
            `;
      document.querySelector("#tabProyectos").innerHTML = tablaProyectos;
    };
    const pintaUsuarios = (usuariosFiltrados) => {
      let tablaUsuarios = (
        // html
        `
            <!-- Tabla de usuarios -->
            <table
            class="table table-hover align-middle mt-3"
            style="min-width: 1000px"
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
            <tbody>
            `
      );
      usuariosFiltrados.forEach((usuario2) => {
        tablaUsuarios += `
            <tr>
            <form novalidate action="" class="form" id="formAdminUsuarios">
                <td>
                    <div class="containerImagen">
                        <div
                            class="rounded-circle d-flex align-items-end justify-content-end"
                            style="
                                background-image: url(${usuario2.avatar});
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
                        value="${usuario2.avatar}"
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
                        value="${usuario2.email}"
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
                        value="${usuario2.nombre}"
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
                        value="${usuario2.apellidos}"
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
                        value="${usuario2.created_at}"
                        class="form-control form-control-sm"
                    />
                    <div class="invalid-feedback">
                        Introduce una fecha válida
                      </div>
                </td>
                <td>
                    <label class="form-label d-none" for="rol"></label>
                    <select id="rol" class="form-control form-control-sm" name="" id="">
                        `;
        switch (usuario2.rol) {
          case "registrado":
            tablaUsuarios += `<option value="registrado">Registrado</option>
                                <option value="desarrollador">Desarrollador</option>
                                <option value="admin">Admin</option>`;
            break;
          case "desarrollador":
            tablaUsuarios += `<option value="desarrollador">Desarrollador</option>
                                <option value="registrado">Registrado</option>
                                <option value="admin">Admin</option>`;
            break;
          case "admin":
            tablaUsuarios += `<option value="admin">Admin</option>
                                <option value="registrado">Registrado</option>
                                <option value="desarrollador">Desarrollador</option>
                                `;
            break;
        }
        tablaUsuarios += `
                    </select>
                </td>
                <td>
                    <label class="form-label d-none" for="estado"></label>
                    <select id="estado" class="form-control form-control-sm" name="" id="">
                    `;
        if (usuario2.estado == "Activo") {
          tablaUsuarios += `<option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                        `;
        } else {
          tablaUsuarios += `
                        <option value="Inactivo">Inactivo</option>
                        <option value="Activo">Activo</option>
                        `;
        }
        tablaUsuarios += `
                        
                    </select>
                </td>
                <td><input
                    type="submit"
                    class="btn btn-success "
                    value="Actualizar"
                  /></td>
                <td><i class="btn btn-sm btn-outline-danger bi bi-trash3 "></i></td>
            </form>
        </tr>
            `;
      });
      tablaUsuarios += // html
      `
            </tbody>
            </table>
            `;
      document.querySelector("#tabUsuarios").innerHTML = tablaUsuarios;
    };
    const inputBusqueda = document.getElementById("inputBusqueda");
    inputBusqueda.addEventListener("input", () => {
      const textoBusqueda = inputBusqueda.value.toLowerCase().trim();
      let informacion = [];
      if (selectUsuarios) {
        informacion = datosUsuarios;
      } else {
        informacion = datosProyectos;
      }
      const informacionFiltrada = informacion.filter((proyecto) => {
        for (const key in proyecto) {
          const valorCampo = proyecto[key];
          if (typeof valorCampo === "string" && valorCampo.toLowerCase().includes(textoBusqueda)) {
            return true;
          }
        }
        return false;
      });
      if (selectUsuarios) {
        pintaUsuarios(informacionFiltrada);
      } else {
        pintaProyectos(informacionFiltrada);
      }
    });
    document.querySelector("#borrarBuscador").addEventListener("click", () => {
      document.getElementById("inputBusqueda").value = "";
      pintaProyectos(datosProyectos);
      pintaUsuarios(datosUsuarios);
    });
    const formulario = document.querySelector("form");
    formulario.addEventListener("change", (e) => {
      console.log("cambiaform");
      if (!formulario.checkValidity()) {
        console.log("No valida");
        formulario.classList.add("was-validated");
      }
    });
    function enviaDatos(id) {
      const proyectoEditado = {
        imagen: document.querySelector("#urlImagen_" + id).value,
        nombre: document.querySelector("#nombreUsuario_" + id).value,
        apellidos: document.querySelector("#apellidosUsuario_" + id).value,
        estado: document.querySelector("#estado_" + id).value,
        email: document.querySelector("#email_" + id).value
      };
      alert(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`);
      console.log(`Enviando a la base de datos el objeto con id = ${usuario.user_id}`, proyectoEditado);
    }
    function borrarUsuario(id) {
      alert("Borrando usuario " + id);
    }
    document.querySelector("main").addEventListener("click", (event) => {
      if (event.target.classList.contains("botonAdmin")) {
        const boton = event.target;
        const id = boton.dataset.id;
        if (boton.classList.contains("botonEditar")) {
          console.log("Editar proyecto " + id);
          window.location = `#/proyectoEditar/${id}`;
        }
        if (boton.classList.contains("botonBorrar")) {
          console.log("Borrar proyecto " + id);
        }
      }
    });
    const formularioAdmin = document.querySelector("#formAdminUsuarios");
    formularioAdmin.addEventListener("click", (e) => {
      console.log("click en form");
      e.preventDefault();
      e.stopPropagation();
      if (e.target.classList.contains("botonActualizar") && formularioAdmin.checkValidity()) {
        const id = e.target.dataset.id;
        enviaDatos(id);
      } else {
        formularioAdmin.classList.add("was-validated");
      }
      if (e.target.classList.contains("botonEliminar")) {
        const tr = e.target.parentNode.parentNode;
        tr.classList.add("d-none");
        const id = e.target.dataset.id;
        borrarUsuario(id);
      }
      if (e.target.classList.contains("botonEditarImagen")) {
        const urlAvatar = e.target.dataset.urlavatar;
        const urlInputAvatar = e.target.dataset.urlinputavatar;
        const id = e.target.dataset.id;
        editarImagenPerfil.script(urlAvatar, urlInputAvatar, id);
      }
    });
  }
};
export {
  adminVista as default
};
