// 函数声明
function fn(a: number, b: number){
    return a + b
}

// 函数声明


// let 函数类型

let fn2: (a: number, b: number) => number;

fn2 = (a, b) => a + b

// 类型别名
type fn3 = (a: number, b: number) => number;

let foo: fn3 = (a, b) => a + b

// 函数接口

interface fn4 {
    (a: number, b: number): number
}


let func: fn4 = (a: number, b: number) => a + b;

