//arrays
let dados: string[] = ['Guilherme', 'Beloni']



//array multitype - independente da ordem

let infos: (string | number)[] = ['guilherme', 1]



//tuplas  - precisar ser exatamento na ordem correta declarada
let boleto:[string, number, number] = ['Aguada', 199, 234434324]




///metodos arrays
dados.pop();



//dates

let aniversario: Date = new Date("2023-12-08 05:00");
console.log(aniversario.toString());