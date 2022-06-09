//EXERCÍCIO 3 - Crie uma função que retorna recebe uma lista de nomes e imprime uma mensagem de boas vindas para cada nome da lista.

const nome = ["Murilo", "Juliana", "Pedro", "Gabriel", "Vanessa","Luiz", "Paulo", "Ana", "Edmarques", "Barbara" ]

function imprimir(nomes, indice){
    console.log(`${indice + 1 }. Bem vindo ${nomes}, tenha um ótimo dia!`)
}

nome.forEach(imprimir)