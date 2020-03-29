var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = "Desconocido",
            this.apellido = "Sin apellido",
            this.peso = 0;
        this.mostrarMensaje();
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("hola", this.nombre + " " + this.apellido);
    };
    Alumno.prototype.asignar = function (nombreParametro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje();
    };
    return Alumno;
}());
//fin de la clase
var alumno1 = new Alumno();
var alumno2 = new Alumno();
alumno1.asignar("Emilia", "Emi", 400);
alumno2.asignar("maria", "vitalia", 150);
