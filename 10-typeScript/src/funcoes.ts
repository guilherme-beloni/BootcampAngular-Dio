//funcoes

function addNumber(x: number, y: number): number {
    return x + y;
}

let soma: number = addNumber(4, 7);
console.log(soma);






function addToHello(name: string, x: number, y: number): string{
    return name + " " + x + y;
}



let soma2: string = addToHello('ola', 4, 5)
console.log(soma2);


//funcoes multitype

function callToPhone(phone: number | string):number | string {
    return phone;
}


console.log(callToPhone(1109094343))


//funcoes assincronas
                //oque eu espero    oque retorna
async function getData(id:number): Promise<number|string>{
    return 1;
}
