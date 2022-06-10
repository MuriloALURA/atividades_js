// EXERCÍCIO 7 - Crie um objeto ‘pessoa’ que possui os seguintes atributos: nome, idade, sexo, cpf, data de nascimento e altura. Em seguida percorra o objeto imprimindo cada elemento e seu valor, da seguinte forma: ‘A chave “[nome]” possui o valor “[valor]”’.

const pessoa = {
    Nome: "Roberto",
    Idade: "32",
    Sexo: "Masculino",
    CPF: "894.840.232-08",
    dataNasc: "20/05/1990",
    Altura:"1.87"
}

Object.keys(pessoa).forEach((item) => {
    console.log(`A chave ${item} possui o valor `+ pessoa[item]);
  });
  