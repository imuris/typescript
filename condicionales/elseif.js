var cantidadesSolicitadas = 20;
if (cantidadesSolicitadas > 15) {
    console.log("aplica un descuento grande");
}
else if (cantidadesSolicitadas >= 10 && cantidadesSolicitadas <= 15) {
    console.log("aplica un descuento pequeño");
}
else {
    console.log("no aplica ningun descuento");
}
