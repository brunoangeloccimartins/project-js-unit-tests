const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('a', 'b'))).toBe(true)
    expect(productDetails('a', 'b').length).toBe(2);
    expect(typeof productDetails('produto1', 'produto2')[0]).toBe('object');
    expect(typeof productDetails('produto1', 'produto2')[1]).toBe('object');
    const produtos = productDetails('produto1', 'produto2');
    expect(produtos[0]).not.toBe(produtos[1]);
    const produto1 = productDetails('produto1', 'produto2')[0];
    const produto2 = productDetails('produto1', 'produto2')[1];
    expect(produto1.details.productId.endsWith('123')).toBe(true);
    expect(produto2.details.productId.endsWith('123')).toBe(true);
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
