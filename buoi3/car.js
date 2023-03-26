// viet class car:3 properties
// 3 obj car: 1.car_1, 2.car_2, 23.car_3

class Car{
    constructor(brand,color,seat){
    this.brand = brand;
    this.color = color;
    this.seat = seat;
    }

    // escapsulation
   set brand(brand){
    if (brand == "Audi")
    this.brand = brand;
   }

    get brand(){
      
        return this.brand +"km/h";
    }
}

let car_1 = new Car("Audi","gray","5");
console.log(car_1);
let car_2 = new Car("Ferrari","black","2");
console.log(car_2);
let car_3 = new Car("Mercedes","white","7");
console.log(car_3);