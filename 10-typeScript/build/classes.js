"use strict";
//classes
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p1 = new Character('ola', 18, 98);
p1.attack();
//subclasses herda da superclass
class Magician extends Character {
    constructor(name, stregth, skill, magicpoints) {
        super(name, stregth, skill);
        this.magicpoints = magicpoints;
    }
}
const p2 = new Magician('magic', 18, 34, 23);
