// 函数的兼容性

export {}

// 二. 参数类型
    

type FUNC = (a: number, b: number) => void;

let fn: FUNC;

let func = (a: string) => {}

// fn = func

// -------------------------------

interface A{
    a: number;
    b: number;
    c: number;
}

interface B{
    a: number;
    b: number
}

let func1 = (arg: A) => {}
let func2 = (arg: B) => {}

func1 = func2

// 双向协变
// func2 = func1


