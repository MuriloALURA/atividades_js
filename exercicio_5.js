//EXERCÍCIO 5 - Crie uma função que recebe uma lista de elementos, remove o elemento que está na posição do meio no array, imprime o elemento removido, e retorna a lista com os elementos restantes.

x = ["Abacate", "Banana", "Maçã", "Acerola", "Amora", "Morango", "Limão"]

function lista(fruta){
    console.log(fruta.splice(3,1));
}

lista(x)

console.log(x)

