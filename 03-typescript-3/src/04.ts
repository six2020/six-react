// class


// 类属性必须赋初始值
// TS 、ES 类的属性都是实例属性，类的方法都是原型方法

class Car{

    // 给构造函数添加修饰符，会把这个参数当成实例属性
    // constructor(public name: string){}


    name: string
    constructor(name: string){
        this.name = name
    }
    run(){
        console.log(` ====>>>>`, this.name);
    }
}

let car = new Car('BMW');

car.run()


// console.log(`Car.prototype ====>>>>`, Car.prototype);
// console.log(`car ====>>>>`, car);


// ----------------------------------------------------

// 类的继承


class GTR extends Car{
    color: string
    constructor(name: string, color: string){
        super(name)
        this.color = color
    }

    lookColor(){
        console.log("color:", this.color)
    }
}

let gtr = new GTR('nis', 'red');

gtr.run()
gtr.lookColor()


