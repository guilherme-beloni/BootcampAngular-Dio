class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        
    }
    imc() {
        const imcc = this.peso/(this.altura*this.altura);
        if (imcc > 24){
            console.log('Você tá gordo!');
        }else {
            console.log('Você tá magro!!');
        }
        return imcc
        //console.log(` ${this.nome} tem ${this.peso}Kg e ${this.altura}M, portanto seu imc é de ${this.peso/(this.altura*this.altura)} ! `)
    }
}



const jose = new Pessoa('José', 100, 1.75);


console.log(jose);


const res = jose.imc();

console.log(res);