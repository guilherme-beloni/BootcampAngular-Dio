"use strict";
//funcoes
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name, x, y) {
    return name + " " + x + y;
}
let soma2 = addToHello('ola', 4, 5);
console.log(soma2);
//funcoes multitype
function callToPhone(phone) {
    return phone;
}
console.log(callToPhone(1109094343));
//funcoes assincronas
//oque eu espero    oque retorna
function getData(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return 1;
    });
}
