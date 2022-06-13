class funcionario{
    constructor (nome,dataContratacao){
        nome = "Pedro";
        dataContratacao = "20/03/2014";
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
        cpf = "894.840.232-08";
        salario = "R$3.000";
        beneficios = "VR + VT";
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
        this.salario= d
    }
    get getBeneficios(){
        return this.beneficios
    }
    set setBeneficios(e){
        this.Beneficios= e
    }
    
}
class pj extends funcionario{
    constructor(nome,dataContratacao, cpf,salario,beneficios,cnpj) {
        super(nome,dataContratacao, cpf,salario,beneficios)
        cnpj = "09.354.272/0001-64";
        salario = "R$3.000";
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

//let func = new funcionario();
let junior = new pf();
let pedro = new pj();


//alterando valores (junior)
junior.setNome = "Roberto", // <== Alteração do nome
junior.setSalario = "R$4.500" // <== Alteração do salario
junior.cpf = "382.947.932-04" // <== Alteração CPF


console.log(pedro)