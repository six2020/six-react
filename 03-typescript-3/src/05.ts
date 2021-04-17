// 类的成员修饰符

export{}


class Car{

    // 公共的
    public name: string
    // 私有的
    private age: number = 12
    // 受保护的
    protected money: number = 10000
    // 静态成员
    static version: string = '1.1.1'
    // 只读成员
    // readonly gender: boolean = true
    static readonly gender: boolean = true

    // 构造函数 private protected 
    constructor(name: string){
        this.name = name
    }

    public run(){
        console.log(` ====>>>>`, this.name);
    }

    pAge(){
        console.log(`this.age ====>>>>`, this.age);
    }

    pMoney(){
        console.log(`this.money ====>>>>`, this.money);
    }
}

let car = new Car('BMW');

car.run()
// console.log(`car.name ====>>>>`, car.name);
// console.log(`car.age ====>>>>`, car.age);

car.pAge()

car.pMoney()

// car.money            err


console.log(` Car.version ====>>>>`,  Car.version);

// car.gender

// Car.gender





// 类的继承


class GTR extends Car{
    color: string
    constructor(name: string, color: string){
        super(name)
        this.color = color
    }

    lookColor(){
        // this.age     err
        // this.money   ok
        console.log("color:", this.color)
    }
}

let gtr = new GTR('nis', 'red');

gtr.run()
gtr.lookColor()


