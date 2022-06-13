// EXERCÍCIO 8 - Crie um objeto literal pessoa com os atributos, nome e idade e métodos acessores e modificadores para os atributos citados.

const pessoa = {
    nome: 'Murilo',
    idade: 22,
    get getNome(){
        return this.nome
    },
    set getNome(nome){
        this.nome = nome
    },
    get getIdade(){
        return this.idade
    },
    set getIdade(idade){
        this.idade = idade
    }
}

console.log(pessoa.getNome)
console.log(pessoa.getIdade)
