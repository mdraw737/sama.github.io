// Este archivo contendría la lógica para manejar usuarios, como una base de datos simulada
const usuarios = [];

function agregarUsuario(usuario, contraseña) {
    usuarios.push({ usuario, contraseña });
}

function eliminarUsuario(usuario) {
    const index = usuarios.findIndex(u => u.usuario === usuario);
    if (index !== -1) {
        usuarios.splice(index, 1);
    }
}

function validarUsuario(usuario, contraseña) {
    return usuarios.some(u => u.usuario === usuario && u.contraseña === contraseña);
}


