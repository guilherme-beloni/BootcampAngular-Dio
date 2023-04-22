//classes

class Character {
    name?: string;  //private|public|protected
    stregth: number; //readonly
    skill: number;

    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void{
        console.log(`Attack with ${this.stregth} points`);
    }
}

const p1 = new Character('ola', 18, 98);
p1.attack();

//subclasses herda da superclass

class Magician extends Character {
    magicpoints: number;
    constructor(name: string, stregth: number, skill: number, magicpoints: number) {
        super(name, stregth, skill)
        this.magicpoints = magicpoints;
        
        
    }
}



const p2 = new Magician('magic', 18, 34, 23);