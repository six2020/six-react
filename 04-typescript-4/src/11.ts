// 函数的兼容性

export {}

// 一. 参数个数
    // 1-1.目标函数参数的个数不能少于源函数

type FUNC = (a: number, b: number) => void;

let fn: FUNC;


let fn1 = (a: number) => {}
let fn2 = (a: number, b: number) => {}
let fn3 = (a: number, b: number, c: number) => {}

fn = fn1
fn = fn2
// fn = fn3



// --------------------------------------------

// 二 可选参数和剩余参数
    // 固定参数兼容可选参数和剩余参数
    // 可选的参数是不兼容固定参数和剩余参数
    // 剩余参数可兼容固定参数和可选参数

let f1 = (a: number, b?: number) => {}
let f2 = (a?: number, b?: number) => {}
let f3 = (...args: number[]) => {}

// fn = f1
// fn = f2
// fn = f3

// f1 = fn  // err
// f1 = f2
// f1 = f3  // err

// f2 = fn
// f2 = f1
// f2 = f3

// f3 = f1
// f3 = f2
// f3 = fn







// 2. 参数类型

// 3. 返回值