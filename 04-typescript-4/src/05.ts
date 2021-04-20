// 泛型
// 泛型接口

export {}

// interface Obj{
//     <T>(a: T): T;
//     name: T
// }

// let fn: Obj = arg => arg;

// fn<number>(1)

// -----------------------

// interface Obj<T>{
//     <T>(a: T): T;
//     name: T
// }

// -----------------------

interface Obj<T>{
    <T>(a: T): T
}

let fn: Obj<number>;
fn = arg => arg;
fn(123)
// fn<number>('123')

// -----------------------


// interface Obj<T = string>{
//     <T>(a: T): T
// }

// let fn: Obj;

// fn = arg => arg;

// fn('abc')
// fn(123)