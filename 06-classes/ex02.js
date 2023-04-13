class Carro {
    constructor(marca, cor, media){
        this.marca = marca;
        this.cor = cor;
        this.media = media;
        
    }
    calcGasto(distancia, preco){
        return distancia*this.media*preco;
    }
}



const crv = new Carro('Honda', 'Prata', 1/8.7);
const resCrv = crv.calcGasto(587, 5.30);

const m3 = new Carro('BMW', 'Azul', 1/10);

const resM3 = m3.calcGasto(100, 5);
console.log(`O carro gastará R$${resCrv} de combustível!`);