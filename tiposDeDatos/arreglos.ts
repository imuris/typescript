var listadoDeNombres: Array<string>=["Emilia","Enya","Vitalia"];
console.log(listadoDeNombres)//imprime todo lo que esta dentro del vector
console.log(listadoDeNombres[0])//imprime la pocicion 0 del vector

type Alumnos={
    nombre:string,
    edad:number,
};

var listadoDeAlumnos: Array<Alumnos>=[
    {
        nombre:"Emilia",
        edad:79,
    },
    {
        nombre:"Emilia",
        edad:79,
    },
    {
        nombre:"Emilia",
        edad:79,
    }
]
console.log(listadoDeAlumnos)
console.log(listadoDeAlumnos[0].nombre)
