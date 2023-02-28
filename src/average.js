/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
// const average = (array) => {
//   if (!array || array.length === 0) {
//     return undefined
//   }
//   const somaTotal = 0 ;
//   for (arrayIndex of array){
//    if ( typeof arrayIndex != Number) {
//     return undefined
//     } else {
//       somaTotal += arrayIndex
//     }
//   }
//     const media = somaTotal / array.length;
//     return media
//   };
const array = [1, 2];
const average = (array) => {
  if (!array || array.length === 0) {
    return undefined;
  }

  let somaTotal = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== Number) {
      return undefined;
    }
    somaTotal += array[i];
  }

  const media = somaTotal / array.length;
  return media;
};
average();
console.log(average())


module.exports = average;
