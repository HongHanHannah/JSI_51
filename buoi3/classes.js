class Animal{

    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
     constructor(name) {
        super(Animal);
        this.name = name;
        this.created = date.now();
    }
}

let Rabbit_1 = new Rabbit("White Rabbit");
console.log(rabbit_1)


