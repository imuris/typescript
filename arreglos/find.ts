var nombres:string[]=["ana","juana","emilia"];


nombres.forEach((nombre)=> {
    if (nombre=="ana")
{

console.log(nombres)
}
})
interface Alumno{
    nombre:string;
    apellido:string;
    idAlumno:number;

}
var alumno:Alumno[]=[]

alumno.push({nombre:"ana", apellido: "piñeda", idAlumno:3});
alumno.push({nombre:"juana", apellido: "piñeda", idAlumno:2});
alumno.push({nombre:"vitalia", apellido: "piñeda", idAlumno:1});
var alumnoEncontrado=alumno.find((alumno=>{
    return alumno.idAlumno==2
}));
console.log(alumnoEncontrado)