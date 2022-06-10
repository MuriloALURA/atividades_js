class funcionario{
    constructor (nome,dataContratacao){
        this.nome = nome
        this.dataContratacao = dataContratacao
    } 
    // get getNome(){
    //     return this.nome
    // }
    // set setNome(x){
    //     this.nome= x
    // }
}
class pf extends funcionario{
    constructor(nome,dataContratacao, cpf,salario,beneficios) {
        super(nome,dataContratacao)
        this.cpf = cpf
        this.salario = salario
        this.beneficios = beneficios
    }
}
class pj extends funcionario{
    constructor(cnpj,salario) {
        this.cnpj = cnpj
        this.salario = salario
    }
}

let func = new funcionario();

func.nome = "Mario"
func.dataContratacao = "20/03/2014"
func.cpf = "894.840.232-08"
func.salario = "R$3.000"
func.beneficios = "VR + VT"
func.cnpj = "09.354.272/0001-64"

console.log(func)

funcionario.setNome = Rogerio