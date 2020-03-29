class Alumno {
    private nombre: string;
    private apellido: string;
    private peso: number;
    constructor ()
    {
        this.nombre="Desconocido",
        this.apellido="Sin apellido",
        this.peso=0
        this.mostrarMensaje();
    }

    private mostrarMensaje(): void {
        console.log("hola", this.nombre + " " + this.apellido)
    }
    asignar(nombreParametro: string, apellidoParametro: string, pesoParametro: number) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje();
    }
}
//fin de la clase
var alumno1: Alumno = new Alumno();
var alumno2: Alumno = new Alumno();
alumno1.asignar("Emilia", "Emi", 400)
alumno2.asignar("maria", "vitalia", 150)

