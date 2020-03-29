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
//or (let cantidadRepetir: number=0; cantidadRepetir< listaDeUsuarios.length; cantidadRepetir ++){
//    console.log(listaDeUsuarios[cantidadRepetir].nombre)
//} 
console.log(listaDeUsuarios);
for (var posicion in listaDeUsuarios) {
    console.log(listaDeUsuarios[posicion].nombre);
    console.log(listaDeUsuarios[posicion].apellido);
}
