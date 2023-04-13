///Objetos
const pessoa = {
    nome: 'Guilherme Beloni',
    idade: 29,
    descrever: function(){   
        console.log(`Meu nome é ${this.nome} e minha Idade é ${this.idade} anos!`)
    }    
};

/*console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);*/



pessoa.altura = 1.76;

console.log(pessoa);

delete pessoa.altura;

pessoa.descrever();

pessoa.sexo = 'Masculine';


console.log(pessoa['sexo'])



