//bài 1
class Animal{

    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal {
     constructor(name) {
        super(Animal);
        this.name = name;
        // this.created = date.now();
    }
}

let Rabbit_1 = new Rabbit("White Rabbit");
console.log(Rabbit_1)
//bài 2
class Clock{
    constructor({template}) {
        this.template = template;
    }
    render(){
        let date = new Date()
        
        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if(secs < 10) secs = '0' + secs;

        let output = this.template
        .replace('h',hours)
        .replace('m',mins)
        .replace('s',secs);

        console.log(output);
    
    }

    stop(){
        clearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(),1000) 
    }
}

class ExtendedClock extends Clock{}





