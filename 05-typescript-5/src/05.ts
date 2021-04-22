// 类型兼容性

export {}


// 类的兼容性

class A{
    name = 'hello'
    constructor(a: number, b: string){}
    private age = 12
}

class B{
    name = 'sieyes'
    constructor(a: number){}
    private age = 18
}

let a = new A(1, '')
let b = new B(1)

// a = b
// b = a

class C extends A{}

let c = new C(1, '');

c = a
a = c