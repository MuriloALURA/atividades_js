// EXERCÍCIO 8 - Crie um objeto literal pessoa com os atributos, nome e idade e métodos acessores e modificadores para os atributos citados.

let a = {
    Pessoa: function (nome,idade) {
        this.nome = nome
        this.idade = idade
    },
    get getNome() {
        return this.nome
    },
    set getNome(x) {
        this.nome = x
    },
    get getIdade() {
        return this.idade
    },
    set getIdade(y) {
        this.idade = y
    },
  };

a.getNome = "Rogerio"
a.getIdade = "30"

console.log(a)
