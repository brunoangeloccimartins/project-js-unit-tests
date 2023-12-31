/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for (var firstcounter = 0; firstcounter <= 3; firstcounter += 1) {
    myArray.push(firstcounter);
    for (var secondcounter = 2; secondcounter <= 3; secondcounter += 1) {
      myArray.push(secondcounter);
    }
  }
  return myArray;
};

module.exports = myCounter;
