//tipos primitivos: number, boolean, string.

let ligado: boolean = false;
let desligado = 1.21;
let ligar: string = 'Desligue';


//null
let nulo: null = null;
let nullo = null;


//undefined
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView:any = false;



//objeto - sem previsibilidade
let produto: object = {
    name:"Guilherme",
    cidade:"PP",
    idade:30,
}


//objeto tipado -com previsibilidade (obriga a ter todas as propriedades)
type ProdutoLoja = {
    nome:string
    preco: number
    unidades: number
};


let meuProduto: ProdutoLoja = {
    nome: "tenis",
    preco: 89.99,
    unidades: 5,
}