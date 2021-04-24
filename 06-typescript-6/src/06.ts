// 装饰器
// 类装饰器、属性装饰器、方法装饰器、参数装饰器




//  =================== 属性饰器 =================== 




const Parame = (): ParameterDecorator=> (...args) => {
    // args[2].writable = false
    console.log(` args====>>>>`, args);
    
}
const Parame1 = (): ParameterDecorator=> (...args1) => {
    // args[2].writable = false
    console.log(` args1====>>>>`, args1);
    
}

class DDDD{
    run(@Parame() a: number, @Parame1() b: string){}

    run1(){}
    name = 'sieyes'
    age = 12
}

