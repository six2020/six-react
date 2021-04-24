// 装饰器
// 类装饰器、属性装饰器、方法装饰器、参数装饰器




//  =================== 方法饰器 =================== 


// const myRun: MethodDecorator = (...args) => {
//     console.log(`args ====>>>>`, args);
    
// }

const myRun = (): MethodDecorator => (...args) => {
    // args[2].writable = false
}

class DD{
    @myRun()
    run(){
        console.log(` ====>>>>`, '跑了~');
        
    }

    run1(){}

    name = 'sieyes'
    age = 12
}

let dd = new DD()
dd.run()
dd.run = function () {
    console.log(` ====>>>>`, '快跑');
    
}

dd.run()