var listaDeUsuarios = [
    {
        nombre: 'emilia',
        apellido: 'Carcamo'
    },
    {
        nombre: 'vitalia',
        apellido: 'Carcamo'
    },
    {
        nombre: 'emilia',
        apellido: 'Carcamo'
    }
];
for (var cantidadRepetir = 0; cantidadRepetir < listaDeUsuarios.length; cantidadRepetir++) {
    console.log(listaDeUsuarios[cantidadRepetir].nombre);
}
for (var _i = 0, listaDeUsuarios_1 = listaDeUsuarios; _i < listaDeUsuarios_1.length; _i++) {
    var usuario = listaDeUsuarios_1[_i];
    console.log(usuario.apellido);
}
