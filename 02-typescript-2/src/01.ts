// function

// 函数声明
function fn(a: number, b: number): number{
    console.log('a ====>>>>', a);
    console.log('b ====>>>>', b);
    return a + b
}

// 函数表达式

let fn1 = (a: number, b: number) => a + b;

console.log('fn1(1, 1) ====>>>>', fn1(1, 1));



// =================================

let fn2: (a: number, b: number) => number;

fn2 = (x, y) => x + y;

console.log('fn2(2, 2) ====>>>>', fn2(2, 2));

