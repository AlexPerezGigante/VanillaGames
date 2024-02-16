import { a as perfiles } from "./datosPrueba-iQ-B72zm.js";
const loginVista = {
  template: (
    //html
    `
     <div class="container">
     <h1 class="mt-5 text-center">Inicia sesión</h1>
     <div class="m-5 mx-auto" style="max-width: 400px">
         <form novalidate action="" class="form border shadow-sm p-3">
               <!-- Email -->
             <label for="email" class="form-label">Email:</label>
             <input required name="email" type="email" class="form-control" />
             <div class="invalid-feedback">
                 El formato del email no es correcto
             </div>
             <!-- Contraseña -->
             <label for="pass" class="form-label mt-3">Contraseña:</label>
             <input required name="password" minlength="6" id="pass" type="password" class="form-control" />
             <div class="invalid-feedback">
                 La contraseña debe tener como mínimo 6 caracteres
             </div>

             <div class="form-check mt-3">
                 <input
                     class="form-check-input"
                     type="checkbox"
                     value=""
                     id="flexCheckChecked"
                     checked
                 />
                 <label class="form-check-label" for="flexCheckChecked">
                     Recordar sesión
                 </label>
             </div>
             <a class="d-block text-end" href="#">¿Has olvidado tu contraseña?</a>
             <input
                 type="submit"
                 class="btn btn-primary w-100 mt-3"
                 value="Iniciar sesión"
             />
         </form>
         <a class="d-block mt-5 btn btn-secondary mx-auto" href="#"
             >¿Eres nuevo? Regístrate</a
         >
        </div>
    </div>
     `
  ),
  script: () => {
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", (event) => {
      console.log("Submit");
      event.preventDefault();
      event.stopPropagation();
      if (!formulario.checkValidity()) {
        formulario.classList.add("was-validated");
        console.log("no valida");
      } else {
        enviarDatos(formulario);
      }
    });
    function enviarDatos(formulario2) {
      const email = formulario2.email.value;
      const pass = formulario2.password.value;
      const indexUser = perfiles.findIndex((user) => user.email === email);
      if (indexUser > 0) {
        if (perfiles[indexUser].contraseña === pass) {
          console.log("¡login correcto!");
          const usuario = {
            nombre: perfiles[indexUser].nombre,
            apellidos: perfiles[indexUser].apellidos,
            email: perfiles[indexUser].email,
            rol: perfiles[indexUser].rol,
            avatar: perfiles[indexUser].avatar,
            user_id: perfiles[indexUser].user_id
          };
          ls.setUsuario(usuario);
          window.location = "#/proyectos";
          header.script();
        } else {
          alert("El usuario no existe o la contraseña no es correcta");
        }
      } else {
        alert("El usuario no existe o la contraseña no es correcta");
      }
    }
  }
};
export {
  loginVista as default
};
