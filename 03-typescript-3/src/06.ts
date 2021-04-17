// 抽象类
// 只能被继承，不能实例化

export {}

abstract class Car{
    // run(){
    //     console.log(` ====>>>>`, '~~~~');
    // }

    abstract run(): void
}

// let car = new Car()

// =================================================

class GTR extends Car{
    constructor(public color: string){
        super()
    }
    run(){
        console.log(` ====>>>>`, '很快');
    }
}

let gtr = new GTR("red");

// gtr.run()
// console.log(`gtr.color ====>>>>`, gtr.color);


// =================================================

class TLJ extends Car{
    constructor(public color: string){
        super()
    }
    run(){
        console.log(` ====>>>>`, '很慢');
    }
}

let tlj = new TLJ("red");

// tlj.run()
// console.log(`tlj.color ====>>>>`, tlj.color);

let car: Car[] = [gtr, tlj];

car.forEach(c=>c.run())







