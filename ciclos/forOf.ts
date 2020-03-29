interface usuario{
    nombre:string;
    apellido:string;
}
var listaDeUsuarios:Array<usuario>=[
    {
        nombre:'emilia',
        apellido: 'Carcamo',
    },
    {
        nombre:'vitalia',
        apellido:'Carcamo',
    },
    {
        nombre:'emilia',
        apellido: 'Carcamo',
    }
]
for (let cantidadRepetir: number=0; cantidadRepetir< listaDeUsuarios.length; cantidadRepetir ++){
    console.log(listaDeUsuarios[cantidadRepetir].nombre)
} 
for (let usuario of listaDeUsuarios){
    console.log(usuario.apellido)
}
