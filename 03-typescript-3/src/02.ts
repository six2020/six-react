export{}


// 可选参数
// function fn(a: number, b?: number){
//     return b ? a + b : a
// }

// fn(1)

// ------------------------------------

// 参数默认值
// function fn(a: number, b: number = 1){
//     return a + b
// }

// fn(1)

// ----------------------------------
// function fn(a: number, b: number = 1, c: number, d: number = 2){
//     return a + b + c + d
// }

// console.log(`fn( 1, undefined, 2) ====>>>>`, fn( 1, undefined, 2));

// ----------------------------------

// 剩余参数

// function fn(a: number, ...result: number[]){
//     console.log(`a ====>>>>`, a);
//     console.log(`result ====>>>>`, result);
// }

// fn(1, 2, 3, 4, 5)

