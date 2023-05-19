const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
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

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    expect(typeof productDetails).toBe('function');// Teste se productDetails é uma função.
    expect(productDetails().isArray).toBe();// Teste se o retorno da função é um array.
    expect(productDetails()).toHaveLength(2);// Teste se o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails()).toBe('object');// Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Mascara', 'Alcool')[0]).toEqual({name: 'Mascara',  details: {
      productId: 'Mascara123'}});
    expect(productDetails('Mascara', 'Alcool')[1]).toEqual({name: 'Alcool',  details: {
      productId: 'Alcool123'}});// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('Mascara', 'Alcool')[0].details.productId).toBe('Mascara123');
    expect(productDetails('Mascara', 'Alcool')[1].details.productId).toBe('Alcool123');// Teste se os dois productIds terminam com 123.
  });
});
