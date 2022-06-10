// EXERCÍCIO 6 - Crie uma função que recebe uma lista de números e retorna uma nova lista contendo os números divisíveis por 2.

function lista(array) {
    return array.filter(function (x) {
        return !(x % 2);
    });
}
console.log(lista([4, 5, 7, 8, 10, 13, 18, 20, 33, 37, 45, 95, 100]));