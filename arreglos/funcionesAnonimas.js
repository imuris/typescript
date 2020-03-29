var nombres = ["ana", "juana", "emilia"];
nombres.forEach(function (nombre) {
    if (nombre == "ana") {
        console.log(nombres);
    }
});
var alumno = [];
alumno.push({ nombre: "ana", apellido: "piñeda" });
alumno.push({ nombre: "juana", apellido: "piñeda" });
alumno.push({ nombre: "vitalia", apellido: "piñeda" });
alumno.forEach(function (alumnos) {
    console.log(alumnos.nombre);
});
