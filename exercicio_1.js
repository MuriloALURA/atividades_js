//EXERCÍCIO 1 - Recebe uma string por parâmetro e a retorna invertida.

function reverseString(str) {
    let x = "";
    let tamanho = str.length-1;
    for (let posicao = tamanho; posicao >= 0; posicao --){
        x = x + str[posicao];
    }

console.log(x)
return x;
}

reverseString("Murilo")