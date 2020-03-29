function multiplicar(numero1, numero2) {
    var total = numero1 * numero2;
    return total;
}
function calcularPromedio(nota1, nota2, nota3) {
    var total = (nota1 + nota2 + nota3) / 3;
    return total;
}
var numeroResultado = 0;
numeroResultado = multiplicar(5, 10);
console.log(numeroResultado);
var promedio = 0;
promedio = calcularPromedio(10, 10, 10);
console.log(promedio);
