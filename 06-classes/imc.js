class Pessoa {
    constructor(nome, peso, altura, anoDeNascimento) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.anoDeNascimento = anoDeNascimento;
        this.idade = 2023 - anoDeNascimento;
    }
    imc() {
        console.log(` ${this.nome} tem ${this.peso}Kg e ${this.altura}M, portanto seu imc é de ${this.peso/(this.altura*this.altura)} e tem aproximadamente ${this.idade} anos! `)
    }
}


/*const guilherme = new Pessoa();
guilherme.nome = 'Guilherme Beloni';
guilherme.peso = 98
guilherme.altura = 1.83

console.log(guilherme);
guilherme.imc();*/

const fulano = new Pessoa('bastiao', 100, 1.43, 1993);

fulano.imc();



console.log(fulano);