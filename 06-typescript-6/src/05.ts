// 装饰器
// 类装饰器、属性装饰器、方法装饰器、参数装饰器




//  =================== 属性饰器 =================== 




const myProp = (): PropertyDecorator=> (...args) => {
    // args[2].writable = false
    console.log(` args====>>>>`, args);
    
}

class DDD{
    run(){}

    run1(){}

    @myProp()
    name = 'sieyes'
    age = 12
}

