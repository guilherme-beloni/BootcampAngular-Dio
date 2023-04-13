class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function comparaPessoas(p1, p2) {
    if (p1.idade > p2.idade) {  
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} é tem a mesma idade que ${p2.nome}`)
    }   
}



const vanessa = new Pessoa('Vanessa', 12);
const guilherme = new Pessoa('Guilherme', 15);

comparaPessoas(vanessa, guilherme);