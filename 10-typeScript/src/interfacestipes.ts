// types => usado apra tiapr
type robot = {
    id: number,
    name: string
}

const bot: robot = {
    id: 1,
    name: 'megaman'
}



//interface => usado para trabalhar com classes
interface robot2 {
    readonly id: number,
    name: string
}

const bot2: robot2 = {
    id: 1,
    name: 'megaman'
}


//com readonly não é possível alterar os dados default
console.log(bot.name = 'megamanX');
console.log(bot2.name = '11');