/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

const { elevar } = require("./Ejercicio 04");

function sonIguales(x, y) {
   if(x === y){
      return true;
   }
   else{
      return false;
   }
}

function tienenMismaLongitud(str1, str2) {
   if(length(str1) === length(str2)){
      return true;
   }
   else{
      return false;
   }
}

function menosQueNoventa(num) {
   if(num < 90){
      return true;
   }
   else{
      return false;
   }
}

function mayorQueCincuenta(num) {
   if(num > 50){
      return true;
   }
   else{
      return false;
   }
}

function esPar(num) {
   if(num % 2 === 0){
      return true;
   }
   else{
      return false;
   }
}

function esImpar(num) {
   if(num % 2 != 0){
      return true;
   }
   else{
      return false;
   }
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
