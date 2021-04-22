// 类型兼容性

export {}

// 泛型兼容性


// 泛型接口

interface Obj<T>{
    name: T
}

let a: Obj<number> = {name: 123}
let b: Obj<string> = {name: 'hello'}

// a = b
// b = a




// 泛型函数

let fn1 = <T extends number>(a: T): T => {
    return a
}

let fn2 = <U extends string>(a: U): U => {
    return a
}



// fn1 = fn2
// fn2 = fn1