var nombres = ["ana", "juana", "emilia"];
nombres.forEach(function (nombre) {
    if (nombre == "ana") {
        console.log(nombres);
    }
});
var alumno = [];
alumno.push({ nombre: "ana", apellido: "piñeda", idAlumno: 3 });
alumno.push({ nombre: "juana", apellido: "piñeda", idAlumno: 2 });
alumno.push({ nombre: "vitalia", apellido: "piñeda", idAlumno: 1 });
var alumnoEncontrado = alumno.find((function (alumno) {
    return alumno.idAlumno == 2;
}));
console.log(alumnoEncontrado);
