// 类型的兼容性

export {}

// 接口的兼容性

interface A {
    a: number;
    b: number;
}

interface B {
    a: number;
    b: number;
    c: number;
}

let a: A = {a: 1, b: 2}
let b: B = {a: 1, b: 2, c: 3}

// 鸭式辨形法
a = b
// b = a

