class funcionario{
    constructor (nome,dataContratacao){
        this.nome = nome
        this.dataContratacao = dataContratacao
    } 
    get getNome(){
        return this.nome
    }
    set setNome(a){
        this.nome= a
    }
    get getdataContratacao(){
        return this.getdataContratacao
    }
    set setdataContratacao(b){
        this.nome= b
    }

}

class pf extends funcionario{
    constructor(nome,dataContratacao, cpf,salario,beneficios) {
        super(nome,dataContratacao)
        this.cpf = cpf
        this.salario = salario
        this.beneficios = beneficios     
    }
    get getCpf(){
        return this.cpf
    }
    set setCpf(c){
        this.cpf= c
    }
    get getSalario(){
        return this.salario
    }
    set setSalario(d){
        this.cpf= d
    }
    get getBeneficios(){
        return this.beneficios
    }
    set setBeneficios(e){
        this.Beneficios= e
    }
    
}
class pj extends funcionario{
    constructor(cnpj,salario) {
        super(nome,dataContratacao, cpf,salario,beneficios)
        this.cnpj = cnpj
        this.salario = salario
    }
    get getCnpj(){
        return this.cnpj
    }
    set setCnpj(f){
        this.cnpj= f
    }
}

let func = new funcionario();

func.nome = "Pedro"
func.dataContratacao = "20/03/2014"
func.cpf = "894.840.232-08"
func.salario = "R$3.000"
func.beneficios = "VR + VT"
func.cnpj = "09.354.272/0001-64"

//alterando valores
func.setNome = "Murilo",
func.salario = "R$4.500"

console.log(func)