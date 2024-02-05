// Gestión de ls
export const ls = {
    // Capturamos datos de ls
    getUsuario: () => {
        // Creamos usuario anónimo si no hay datos
        let usuario = {
            email: 'anónimo',
            rol: 'no logueado',
            avatar: ''
        }
        // Capturamos datos de ls
        const usuarioJSON = localStorage.getItem('usuarioVanilla')
        // Si existe usuario log lo actualizamos, sino anónimo
        if(usuarioJSON){
            // Parseamos datos
            usuario = JSON.parse(usuarioJSON)
        }
        return usuario
    },
    setUsuario: (usuario) => {
        // Convertimos objeto a JSON
        const usuarioJSON = JSON.stringify(usuario)
        // Guardamos en ls
        localStorage.setItem('usuarioVanilla', usuarioJSON)
    }
}