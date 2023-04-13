class Pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha Idade é ${this.idade} anos!`)
    }
}



const guilherme = new Pessoa();
guilherme.nome = 'Guilherme Beloni';
guilherme.idade = 29;


console.log(guilherme);
guilherme.descrever();