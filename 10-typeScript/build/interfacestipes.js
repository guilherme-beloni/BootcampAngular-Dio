"use strict";
const bot = {
    id: 1,
    name: 'megaman'
};
const bot2 = {
    id: 1,
    name: 'megaman'
};
//com readonly não é possível alterar os dados default
console.log(bot.name = 'megamanX');
console.log(bot2.name = '11');
