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

}
var alumno:Alumno[]=[]

alumno.push({nombre:"ana", apellido: "piñeda"});
alumno.push({nombre:"juana", apellido: "piñeda"});
alumno.push({nombre:"vitalia", apellido: "piñeda"});
alumno.forEach((alumnos)=>{
    console.log(alumnos.nombre)
})