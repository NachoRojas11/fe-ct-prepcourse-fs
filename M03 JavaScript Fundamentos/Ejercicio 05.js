/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
    if(num > 0){
      return 'Es positivo';
    }
    else{
      return 'Es negativo';
    }
}

function agregarSimboloExclamacion(str) {
   return str + '!';
}

function combinarNombres(nombre, apellido) {
   return nombre + ' ' + apellido;
}

function obtenerSaludo(nombre) {
   return 'Hola' + nombre + '!';
}

function obtenerAreaRectangulo(alto, ancho) {
   area = obtenerAreaRectangulo(alto,ancho);
   return area;
}

function retornarPerimetro(lado) {
   return retornarPerimetro(lado);
}

function areaDelTriangulo(base, altura) {
   area = areaDelTriangulo(base, altura)
   return area;
}

function deEuroAdolar(euro) {
   return euro * 1.20;
}

function esVocal(letra) {
   if(esVocal(letra) === true){
      return 'Es vocal';
   }
   else if(length.letra === 1){
      return 'Dato incorrecto';
   }
   else{
      return 'Dato incorrecto';
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
